package service

import (
	"link-share-api/internal/dto"
	"link-share-api/internal/model"
	"link-share-api/internal/repository"
	"link-share-api/pkg/common"
	"net/http"

	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

type AuthService interface {
	Login(req *dto.LoginRequest) (*common.Response, *common.ErrorResponse)
	Register(req *dto.RegisterRequest) (*common.Response, *common.ErrorResponse)
}

type authService struct {
	userRepo repository.UserRepository
}

func NewAuthService(userRepo repository.UserRepository) AuthService {
	return &authService{userRepo: userRepo}
}

func (s *authService) Login(request *dto.LoginRequest) (*common.Response, *common.ErrorResponse) {
	return nil, nil
}

func (s *authService) Register(request *dto.RegisterRequest) (*common.Response, *common.ErrorResponse) {
	emailExist, err := s.userRepo.FindByEmail(request.Email)

	if err != nil && err != gorm.ErrRecordNotFound {
		return nil, &common.ErrorResponse{
			Error: err.Error(),
		}
	}
	if err == nil && emailExist.ID != "" {
		return nil, &common.ErrorResponse{
			Code:  http.StatusBadRequest,
			Error: "invalid credentials",
		}
	}

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(request.Password), bcrypt.DefaultCost)
	if err != nil {
		return nil, &common.ErrorResponse{
			Error: err.Error(),
		}
	}

	user := &model.User{
		Email:    request.Email,
		Password: string(hashedPassword),
	}
	err = s.userRepo.Create(user)
	if err != nil {
		return nil, &common.ErrorResponse{
			Code:  http.StatusInternalServerError,
			Error: err.Error(),
		}
	}

	return &common.Response{
		Data: user.ID,
		Code: http.StatusCreated,
	}, nil
}
