const { DataTypes, Model } = require("sequelize");
const sequelize = require("../connect");


class User extends Model {
  static async countUsers() {
    try {
      const userCount = await User.count();
      return userCount;
    } catch (error) {
      throw new Error(`Error counting users: ${error.message}`);
    }
  }

  static async findByEmail(email) {
    try {
      const user = await User.findOne({
        where: { email },
        exclude: ["created_at", "updated_at", "deleted_at"],
      });
      //if user not found returns null;
      return user;
    } catch (error) {
      throw new Error(
        `Error finding user by email ${email}: \n${error.message}`
      );
    }
  }

  static async findById(id) {
    try {
      const user = await User.findByPk(id);


      return user;
    } catch (error) {
      throw new Error(`Error finding user by id ${id}: \n${error.message}`);
    }
  }

  static async addNewUser({ email, password, name, surname, phone, profile_image_key }) {
    try {
      const user = await User.create({ email, password, name, surname, phone, profile_image_key });
      return user;
    } catch (error) {
      throw new Error(`Error creating user: ${error.message}`);
    }
  }

  static async updateUser(id, data) {
    try {
      const user = await User.update(data, {
        where: {
          id,
        },
        returning: true,
        plain: true
      });
      console.log("user : ", user)
      return user[1].dataValues;
    } catch (error) {
      throw new Error(`Error updating user: ${error.message}`);
    }
  }

  static async deleteUser(id) {
    try {
      const user = await User.destroy({
        where: {
          id,
        },
      });
      return user;
    } catch (error) {
      throw new Error(`Error deleting user: ${error.message}`);
    }
  }




}

User.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, //generates automatically uuid
      primaryKey: true,
    },
    username: {
      type: DataTypes.VIRTUAL,
      get() {
        return this.name + " " + this.surname;
      }
    },
    email: {
      type: DataTypes.STRING(40),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    profile_image: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      set(value) {
        if (value === "") {
          this.setDataValue("profile_image", null);
        } else {
          this.setDataValue("profile_image", value);
        }
      },
    },
    profile_image_key: {
      type: DataTypes.STRING(255),
      allowNull: false,

    },

    password: {
      type: DataTypes.CHAR(60),
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "user",
      validate: {
        isIn: [["user", "business", "admin"]],
      },
    },
    name: {
      type: DataTypes.STRING(40),
      //TODO: validation he/eng
      isAlpha: true,
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING(40),
      isAlpha: true,
      allowNull: false,
    },
    birthday: {
      type: DataTypes.DATE,
      validate: {
        isDate: true,
      },
    },
    phone: {
      type: DataTypes.STRING(10),
      allowNull: false,
      validate: (val) => {
        const error = new Error();
        error.name = 'INVALID_PHONE_FORMAT'
        if (val.length !== 10) {
          error.message = "Phone number must be 10 digits long";
          throw error;
        }
        if (!val.match(/^[0-9]+$/)) {
          error.message = "Phone number must contain only digits";
          throw error;
        }
      }
    },

    city: {
      type: DataTypes.STRING(40),
    },
    street: {
      type: DataTypes.STRING(40),
    },
    house_number: {
      type: DataTypes.STRING(40),
    },
    postal_code: {
      type: DataTypes.INTEGER,
    },
  },
  {
    paranoid: true,
    tableName: "users",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
    sequelize, // We need to pass the connection instance
    modelName: "User", // We need to choose the model name
    indexes: [
      {
        name: "idx_BTREE_users_email",
        using: "BTREE",
        fields: ["email"],
      },
    ],
  }
);

module.exports = User;
