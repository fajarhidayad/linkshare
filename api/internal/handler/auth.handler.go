package handler

import (
	"link-share-api/internal/dto"
	"link-share-api/internal/service"
	"link-share-api/pkg/common"
	"net/http"

	"github.com/gin-gonic/gin"
)

type AuthHandler interface {
	Login(c *gin.Context)
	Register(c *gin.Context)
}

type authHandler struct {
	authService service.AuthService
}

func NewAuthHandler(authService service.AuthService) AuthHandler {
	return &authHandler{authService: authService}
}

func (h *authHandler) Login(c *gin.Context) {

}

func (h *authHandler) Register(c *gin.Context) {
	var body dto.RegisterRequest
	if err := c.ShouldBindJSON(&body); err != nil {
		c.JSON(http.StatusBadRequest, common.ErrorResponse{
			Error: err.Error(),
			Code:  http.StatusBadRequest,
		})
		return
	}

	res, errorResponse := h.authService.Register(&body)

	if errorResponse != nil {
		c.JSON(http.StatusBadRequest, errorResponse)
		return
	}

	c.JSON(http.StatusCreated, res)
}
