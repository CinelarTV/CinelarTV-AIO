# frozen_string_literal: true

class Admin::BaseController < ApplicationController
    before_action :authenticate_user!
    before_action :verify_admin
  
    private
  
    def verify_admin
      redirect_to '/', alert: 'No tienes permisos suficientes para acceder a esta página.' unless current_user.has_role?(:admin)
    end
  end
  