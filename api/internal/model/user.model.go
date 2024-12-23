package model

import (
	"link-share-api/pkg/common"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type User struct {
	common.ModelWithID
	Email             string `json:"email"`
	Password          string `json:"password"`
	FirstName         string `json:"firstName"`
	LastName          string `json:"lastName"`
	ProfilePictureUrl string `json:"profilePictureUrl"`
	Links             []Link `json:"-"`
}

func (u *User) BeforeCreate(tx *gorm.DB) error {
	u.ID = uuid.NewString()
	return nil
}
