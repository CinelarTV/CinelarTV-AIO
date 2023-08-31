import I18n from 'i18n-js';
I18n.translations || (I18n.translations = {});
I18n.translations["en"] = I18n.extend((I18n.translations["en"] || {}), JSON.parse('{"js":{"admin":{"actions":{"add":"Add","cancel":"Cancel","delete":"Delete","edit":"Edit","save":"Save"},"content_manager":{"actions":"Actions","content_cover":"Cover","content_title":"Title","content_type":"Type","content_types":{"MOVIE":"Movie","TVSHOW":"Series"},"create_content":"Add content","created_at":"Created at","id":"ID","nav":{"all_content":"All content","categories":"Categories","episodes":"Episodes","movies":"Movies","seasons":"Seasons","series":"Series"},"updated_at":"Updated at"},"nav":{"content":"Manage content","dashboard":"Dashboard","settings":"Settings","updater":"Upgrader","users":"Users"},"settings":{"content":{"title":"Content","tmdb_api_key":{"description":"The API key of your TMDB account, you can get it \\u003ca href=\'https://www.themoviedb.org/settings/api\' target=\'_blank\'\\u003ehere\\u003c/a\\u003e","title":"TMDB API key"}},"customization":{"background_color":{"description":"The background color of the application, this will be the color of the splash screen and the background of the application","title":"Background color"},"base_font_family":{"description":"The font family of the application","title":"Base font family"},"body_text_color":{"description":"The color of the text of the application","title":"Body text color"},"enable_carousel":{"description":"Enables the carousel on the home page","title":"Enable carousel"},"header_background_color":{"description":"The background color of the application header","title":"Header background color"},"header_font_family":{"description":"The font family of the application header","title":"Header font family"},"primary_color":{"description":"","title":"Primary color"},"tertiary_color":{"description":"Used for some links and tabs","title":"Tertiary color"},"title":"Customization"},"developer":{"enable_js_error_reporting":{"description":"Enables the reporting of JavaScript errors, this will send the errors to the server and will be displayed in the console. You can see the reports in \\u003ca href=\'/logs\'\\u003e/logs\\u003c/a\\u003e","title":"Enable JavaScript error reporting"},"title":"Developer"},"experimental":{"enable_web_updater":{"description":"Enables the web update interface in \\u003ca href=\'/admin/updates\'\\u003e/admin/updates\\u003c/a\\u003e.\\u003cbr\\u003e\\u003cb\\u003eCaution:\\u003c/b\\u003e As an experimental feature, the application may stop working properly if something goes wrong during the update","title":"Experimental web updater"},"title":"Experimental"},"general":{"allow_registration":{"description":"Allows users to register on the site","title":"Allow registration"},"default_locale":{"description":"The default language of your site","title":"Default language"},"enable_splash_screen":{"description":"Enables the splash screen when the application is loaded","title":"Enable splash screen"},"site_description":{"description":"A short description of your site, as it will appear in the description meta tag of the browser","title":"Site description"},"site_logo":{"description":"The logo of your site, as it will appear in the application header","title":"Site logo"},"site_name":{"description":"The name of your site, as it will appear in the title bar of the browser","title":"Site name"},"title":"General"},"save":"Save","storage":{"allow_video_direct_link":{"description":"Allows the direct link of the videos. This can be a problem if you don\'t have control over the server where the videos are hosted, as it can cause a high consumption of bandwidth or interruptions in the service","title":"Allow video direct link"},"title":"Storage"}},"updater":{"ready_description":"CinelarTV is software that is constantly being updated, and we keep in mind that you might want to be on the cutting edge, so we\'ve implemented this experimental feature to make it as simple as pressing a button.","ready_title":"¿Ready for update?"}},"wizard":{"introduction":{"description":"🎉 Welcome to CinelarTV! 🎉\\u003cbr\\u003e\\u003cbr\\u003eBefore you start, we need to configure some things. Don\'t worry, it\'s very simple and you\'ll only have to do it once.","title":"Introduction"},"site_info":{"description":"This information will be used to configure your site","fields":{"default_locale":{"description":"The default language of your site","title":"Default language"},"site_description":{"description":"A short description of your site, as it will appear in the description meta tag of the browser","title":"Site description"},"site_name":{"description":"The name of your site, as it will appear in the title bar of the browser","title":"Site name"}},"title":"Site info"},"step":"Step"}}}'));
I18n.translations["es"] = I18n.extend((I18n.translations["es"] || {}), JSON.parse('{"js":{"admin":{"actions":{"add":"Añadir","cancel":"Cancelar","delete":"Eliminar","edit":"Editar","save":"Guardar"},"content_manager":{"actions":"Acciones","content_cover":"Portada","content_title":"Título","content_type":"Tipo","content_types":{"MOVIE":"Película","TVSHOW":"Series"},"create_content":"Añadir contenido","created_at":"Creado el","id":"ID","nav":{"all_content":"Todo el contenido","categories":"Categorías","episodes":"Episodios","movies":"Películas","seasons":"Temporadas","series":"Series"},"updated_at":"Actualizado el"},"nav":{"content":"Administrar contenido","dashboard":"Panel de control","settings":"Configuración","updater":"Actualizador","users":"Usuarios"},"settings":{"content":{"title":"Contenido","tmdb_api_key":{"description":"La clave API de tu cuenta de TMDB, la puedes obtener \\u003ca href=\'https://www.themoviedb.org/settings/api\' target=\'_blank\'\\u003eaquí\\u003c/a\\u003e.","title":"Clave de API TMDB"}},"customization":{"background_color":{"description":"El color de fondo de la aplicación, será el color de la pantalla de carga y el fondo de la aplicación","title":"Color de fondo"},"base_font_family":{"description":"La fuente de la aplicación","title":"Fuente base"},"body_text_color":{"description":"El color del texto de la aplicación","title":"Color del texto del cuerpo"},"enable_carousel":{"description":"Activa el carrusel en la página de inicio","title":"Activar carrusel"},"header_background_color":{"description":"El color de fondo del encabezado de la aplicación","title":"Color de fondo del encabezado"},"header_font_family":{"description":"La fuente del encabezado de la aplicación","title":"Fuente del Encabezado"},"primary_color":{"description":"","title":"Color primario"},"tertiary_color":{"description":"Se utiliza para algunos enlaces y pestañas","title":"Color terciario"},"title":"Personalización"},"developer":{"enable_js_error_reporting":{"description":"Permite informar de errores de JavaScript, esto enviará los errores al servidor y se mostrará en la consola. Puede ver los informes en \\u003ca href=\'/logs\'\\u003e/logs\\u003c/a\\u003e","title":"Habilitar el informe de errores de JavaScript"},"title":"Desarrollador"},"experimental":{"enable_web_updater":{"description":"Habilita la interfaz de actualización web en \\u003ca href=\'/admin/updates\'\\u003e/admin/updateds.\\u003c/a\\u003e \\u003cbr\\u003e\\u003cb\\u003ePrecaución:\\u003c/b\\u003e Como función experimental, la aplicación puede dejar de funcionar correctamente si algo sale mal durante la actualización","title":"Actualizador web experimental"},"title":"Experimental"},"general":{"allow_registration":{"description":"Permite a los usuarios registrarse en el sitio","title":"¿Permitir el registro?"},"default_locale":{"description":"El idioma predeterminado de tu sitio","title":"Idioma predeterminado"},"enable_splash_screen":{"description":"Activa la pantalla de bienvenida cuando se carga la aplicación","title":"Habilitar pantalla de carga"},"site_description":{"description":"Una breve descripción de tu sitio, tal y como aparecerá en la metaetiqueta de descripción del navegador","title":"Descripción del sitio"},"site_logo":{"description":"El logotipo de su sitio, tal y como aparecerá en el encabezado de la aplicación","title":"Logotipo del sitio"},"site_name":{"description":"El nombre de tu sitio, tal y como aparecerá en la barra de título del navegador","title":"Nombre del sitio"},"title":"General"},"save":"Guardar","storage":{"allow_video_direct_link":{"description":"Permite el enlace directo de los vídeos. Esto puede ser un problema si no tienes control sobre el servidor donde se alojan los vídeos, ya que puede provocar un alto consumo de ancho de banda o interrupciones en el servicio","title":"Permitir enlace directo de vídeo"},"title":"Almacenamiento"}},"updater":{"ready_description":"CinelarTV es un software que se actualiza constantemente, y tenemos en cuenta que es posible que desee estar a la vanguardia, por lo que hemos implementado esta función experimental para que sea tan simple como pulsar un botón.","ready_title":"¿Listo para actualizar?"}},"wizard":{"introduction":{"description":"🎉 ¡Bienvenido a CinelarTV! 🎉 \\u003cbr\\u003e\\u003cbr\\u003eAntes de empezar, necesitamos configurar algunas cosas. No te preocupes, es muy sencillo y solo tendrás que hacerlo una vez.","title":"Introducción"},"site_info":{"description":"Esta información se utilizará para configurar su sitio","fields":{"default_locale":{"description":"El idioma predeterminado de tu sitio","title":"Idioma predeterminado"},"site_description":{"description":"Una breve descripción de tu sitio, tal y como aparecerá en la metaetiqueta de descripción del navegador","title":"Descripción del sitio"},"site_name":{"description":"El nombre de tu sitio, tal y como aparecerá en la barra de título del navegador","title":"Nombre del sitio"}},"title":"Información del sitio"},"step":"Intervalo"}}}'));
I18n.translations["ru"] = I18n.extend((I18n.translations["ru"] || {}), JSON.parse('{"js":{"admin":{"actions":{"add":"Añadir","cancel":"Cancelar","delete":"Eliminar","edit":"Editar","save":"Guardar"},"content_manager":{"actions":"Acciones","content_cover":"Portada","content_title":"Título","content_type":"Tipo","content_types":{"MOVIE":"Película","TVSHOW":"Series"},"create_content":"Añadir contenido","created_at":"Creado el","id":"ID","nav":{"all_content":"Todo el contenido","categories":"Categorías","episodes":"Episodios","movies":"Películas","seasons":"Temporadas","series":"Series"},"updated_at":"Actualizado el"},"nav":{"content":"Administrar contenido","dashboard":"Panel de control","settings":"Configuración","updater":"Actualizador","users":"Usuarios"},"settings":{"content":{"title":"Contenido","tmdb_api_key":{"description":"La clave API de tu cuenta de TMDB, la puedes obtener \\u003ca href=\'https://www.themoviedb.org/settings/api\' target=\'_blank\'\\u003eaquí\\u003c/a\\u003e.","title":"Clave de API TMDB"}},"customization":{"background_color":{"description":"El color de fondo de la aplicación, será el color de la pantalla de carga y el fondo de la aplicación","title":"Color de fondo"},"base_font_family":{"description":"La fuente de la aplicación","title":"Fuente base"},"body_text_color":{"description":"El color del texto de la aplicación","title":"Color del texto del cuerpo"},"enable_carousel":{"description":"Activa el carrusel en la página de inicio","title":"Activar carrusel"},"header_background_color":{"description":"El color de fondo del encabezado de la aplicación","title":"Color de fondo del encabezado"},"header_font_family":{"description":"La fuente del encabezado de la aplicación","title":"Fuente del Encabezado"},"primary_color":{"description":"","title":"Color primario"},"tertiary_color":{"description":"Se utiliza para algunos enlaces y pestañas","title":"Color terciario"},"title":"Personalización"},"developer":{"enable_js_error_reporting":{"description":"Permite informar de errores de JavaScript, esto enviará los errores al servidor y se mostrará en la consola. Puede ver los informes en \\u003ca href=\'/logs\'\\u003e/logs\\u003c/a\\u003e","title":"Habilitar el informe de errores de JavaScript"},"title":"Desarrollador"},"experimental":{"enable_web_updater":{"description":"Habilita la interfaz de actualización web en \\u003ca href=\'/admin/updates\'\\u003e/admin/updateds.\\u003c/a\\u003e \\u003cbr\\u003e\\u003cb\\u003ePrecaución:\\u003c/b\\u003e Como función experimental, la aplicación puede dejar de funcionar correctamente si algo sale mal durante la actualización","title":"Actualizador web experimental"},"title":"Experimental"},"general":{"allow_registration":{"description":"Permite a los usuarios registrarse en el sitio","title":"¿Permitir el registro?"},"default_locale":{"description":"El idioma predeterminado de tu sitio","title":"Idioma predeterminado"},"enable_splash_screen":{"description":"Activa la pantalla de bienvenida cuando se carga la aplicación","title":"Habilitar pantalla de carga"},"site_description":{"description":"Una breve descripción de tu sitio, tal y como aparecerá en la metaetiqueta de descripción del navegador","title":"Descripción del sitio"},"site_logo":{"description":"El logotipo de su sitio, tal y como aparecerá en el encabezado de la aplicación","title":"Logotipo del sitio"},"site_name":{"description":"El nombre de tu sitio, tal y como aparecerá en la barra de título del navegador","title":"Nombre del sitio"},"title":"General"},"save":"Guardar","storage":{"allow_video_direct_link":{"description":"Permite el enlace directo de los vídeos. Esto puede ser un problema si no tienes control sobre el servidor donde se alojan los vídeos, ya que puede provocar un alto consumo de ancho de banda o interrupciones en el servicio","title":"Permitir enlace directo de vídeo"},"title":"Almacenamiento"}},"updater":{"ready_description":"CinelarTV es un software que se actualiza constantemente, y tenemos en cuenta que es posible que desee estar a la vanguardia, por lo que hemos implementado esta función experimental para que sea tan simple como pulsar un botón.","ready_title":"¿Listo para actualizar?"}},"wizard":{"introduction":{"description":"🎉 ¡Bienvenido a CinelarTV! 🎉 \\u003cbr\\u003e\\u003cbr\\u003eAntes de empezar, necesitamos configurar algunas cosas. No te preocupes, es muy sencillo y solo tendrás que hacerlo una vez.","title":"Introducción"},"site_info":{"description":"Esta información se utilizará para configurar su sitio","fields":{"default_locale":{"description":"El idioma predeterminado de tu sitio","title":"Idioma predeterminado"},"site_description":{"description":"Una breve descripción de tu sitio, tal y como aparecerá en la metaetiqueta de descripción del navegador","title":"Descripción del sitio"},"site_name":{"description":"El nombre de tu sitio, tal y como aparecerá en la barra de título del navegador","title":"Nombre del sitio"}},"title":"Información del sitio"},"step":"Intervalo"}}}'));
