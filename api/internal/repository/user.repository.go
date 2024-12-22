package repository

import (
	"link-share-api/internal/model"

	"gorm.io/gorm"
)

type UserRepository interface {
	Create()
	FindAll()
	FindByID(id string) *model.User
	FindByEmail(email string) *model.User
	Update()
	Delete(id string)
}

type userRepository struct {
	db *gorm.DB
}

func NewUserRepository(db *gorm.DB) UserRepository {
	return &userRepository{db}
}

func (r *userRepository) Create() {

}

func (r *userRepository) FindAll() {

}

func (r *userRepository) FindByID(id string) *model.User {
	return nil
}

func (r *userRepository) FindByEmail(email string) *model.User {
	return nil
}

func (r *userRepository) Update() {

}

func (r *userRepository) Delete(id string) {

}
