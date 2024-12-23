package repository

import (
	"link-share-api/internal/model"

	"gorm.io/gorm"
)

type LinkRepository interface {
	Create()
	FindByUserID(userId string) *[]model.Link
	FindByID(id string) *model.Link
	Update(id string)
	Delete(id string)
}

type linkRepository struct {
	db *gorm.DB
}

func NewLinkRepository(db *gorm.DB) LinkRepository {
	return &linkRepository{db}
}

func (r *linkRepository) Create() {

}

func (r *linkRepository) FindByUserID(userId string) *[]model.Link {
	return nil
}

func (r *linkRepository) FindByID(id string) *model.Link {
	return nil
}

func (r *linkRepository) Update(id string) {

}

func (r *linkRepository) Delete(id string) {

}
