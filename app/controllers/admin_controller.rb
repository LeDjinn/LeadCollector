class AdminController < ApplicationController

    def index
        @users=User.all
        @comments=Comment.all
        @notifications = Notification.all
        @notifications_valid = Notification.where(read: false)
    end
end
