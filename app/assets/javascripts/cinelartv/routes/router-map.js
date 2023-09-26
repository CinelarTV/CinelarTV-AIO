import { createWebHistory, createRouter } from 'vue-router'
import { currentUser, SiteSettings } from '../pre-initializers/essentials-preload'
import { query } from '../utils/query'
import CinelarTV from '../application'
import { SafeMode } from '../pre-initializers/safe-mode'



const loadRoutes = () => {
    const routes = require.context('./', true, /\.route\.js$/)

    return routes.keys()
        .map(routes)         // import module
        .map(m => {
            if (!m.default?.path) {
                console.warn(`Route ${m.default.name} has no path. Skipping...`)
                return
            }
            return m.default
        })  // get `default` export from each resolved module
}

const loadPluginRoutes = () => {
    const routes = require.context('pluginsDir', true, /routes\/.+\.route\.js$/);
    return routes.keys()
        .map(routes)         // import module
        .map(m => {
            if (!m.default?.path) {
                console.warn(`Route ${m.default.name} has no path. Skipping...`)
                return
            }
            return m.default
        })  // get `default` export from each resolved module
}



let routes = []

routes = routes.concat(loadRoutes())

if (SiteSettings.enable_plugins) {
    if (SafeMode.enabled && SafeMode.noPlugins) {}
    else {
        routes = routes.concat(loadPluginRoutes())
    }
        
}



const AppRouter = createRouter({
    history: createWebHistory(),
    routes
});


AppRouter.beforeEach((to, from, next) => {
    document.body.classList.add('route-transition')

    // Redirigir a 'home.index' si ya estás en 'profile.select' y el usuario tiene un perfil
    if (to.name === 'profile.select' && currentUser && currentUser.current_profile) {
        next({
            name: 'home.index',
            replace: true
        });
        return
    }

    if (to.name === 'profile.select' && currentUser && !currentUser.current_profile) {
        next();
        return
    }

    // Redirigir a 'NotFound' si se requiere autenticación y no hay usuario
    if (to.meta.requiresAuth && !currentUser) {
        next({
            name: 'NotFound', // Cambia 'NotFound' por la ruta adecuada
            params: [to.path],
            replace: true
        });
        return;
    }

    // Redirigir a 'profile.select' si el usuario no tiene perfil, a menos que la ruta sea wizard
    if (currentUser && !currentUser.current_profile && to.name !== 'application.wizard' && to.name !== 'wizard.step') {
        next({
            name: 'profile.select',
            replace: true
        });
        return;
    }

    // Redirigir a 'NotFound' si se requiere admin y el usuario no es admin
    if (to.meta.requireAdmin && (!currentUser || !currentUser.admin)) {
        next({
            name: 'NotFound', // Cambia 'NotFound' por la ruta adecuada
            params: [to.path],
            replace: true
        });
        return;
    }

    // Catch login and signup routes (They don't exist in the app, we use modals, so we redirect to home and show the modal)

    if (to.path === '/login' || to.path === '/signup') {
        next({
            name: 'home.index',
            replace: true
        });
        return;
    }



    // Permite la navegación normal
    next();
    CinelarTV.config.globalProperties.$progress.finish()
});



AppRouter.afterEach((to, from) => {
    if (window.MiniProfiler && from) {
        window.MiniProfiler.pageTransition();
    }
    document.body.setAttribute('data-current-path', to.path);
    CinelarTV.config.globalProperties.$progress.finish()
    document.body.classList.remove('route-transition')
})

AppRouter.onError((err) => {
    if (/loading chunk \d* failed./i.test(err.message)) {
        if (confirm(window.I18n.t('errors.chunk_loading_error'))) {
            window.location.reload()
        }
    }
})


window.AppRouter = AppRouter

export default AppRouter;