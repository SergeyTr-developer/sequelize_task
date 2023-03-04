const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("social_network", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

// 1-я модель

const User = sequelize.define(
  "User",
  {
   
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photo_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gender: {
      type: DataTypes.ENUM(["male", "female"]),
      allowNull: true,
    },
    balance: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
  },
  {
    
    tableName: "users",
    timestamps: false,
  }
);

// 2-я модель

const Posty = sequelize.define(
  "fasting",
  {
    
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    
    tableName: "fasting",
  }
);

// 3-я модель

const journal = sequelize.define(
  "journal",
  {
   
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_from: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_to: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
   
    tableName: "journal",
    timestamps: false,
  }
);

// User.hasMany(journal, {
//   foreignKey: 'user_to'
// });
// journal.belongsTo(User);


// User.hasMany(journal, {
//   foreignKey: 'user_from'
// });
// journal.belongsTo(User);

(async () => {
  try {
    await User.sync({
      alter: true,
      force: false,
    });
    await Posty.sync({
      alter: true,
      force: false,
    });
    await journal.sync({
      alter: true,
      force: false,
    });
  } catch (error) {
    console.error(error);
  }


  // получения списка из таблицы (findAll)

  // const users = await User.findAll();
  // users.forEach(user => console.log(user.id, user.first_name));

  // получения элемента по идентификатору (findByPk)

  // const project = await User.findByPk(2);
  // if (project === null) {
  //   console.log('Not found!');
  // } else {
  //   console.log(project.id, project.first_name);
  // }

  // получения списка элементов с условием (findAll с where)

  // const list = await User.findAll({
  //   where: {
  //     gender: 'male'
    
  //   }
  // });
  // list.forEach(user => console.log(user.id, user.first_name));
  
// добавления элемента

  // const name = await User.create({email: "user123@test" , password: "Привет", last_name: "Petrov", first_name: "Sergey"});

 
  // удаления элемента
   
  //   await User.destroy({

  //     where: {
   
  //         id: 12
   
  //     }
   
  //  });

  // редактирования элемента

  // let ivan = await User.findOne({
  //   where: {
  //     id: 3,
  //   },
  // });

  // ivan.first_name = "Катя";

  // await ivan.save();

  // User.hasMany(journal, {
  //   foreignKey: 'user_from'
  // });
  // journal.belongsTo(User);

})();
