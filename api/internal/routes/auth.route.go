package routes

import (
	"link-share-api/internal/handler"
	"link-share-api/internal/repository"
	"link-share-api/internal/service"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func AuthRoute(r *gin.RouterGroup, db *gorm.DB) {
	userRepo := repository.NewUserRepository(db)
	authService := service.NewAuthService(userRepo)
	authHandler := handler.NewAuthHandler(authService)

	auth := r.Group("/auth")

	auth.POST("/login", authHandler.Login)
	auth.POST("/register", authHandler.Register)
}
