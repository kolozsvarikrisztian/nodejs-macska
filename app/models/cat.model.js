module.exports = (sequelize, Sequelize) => {
    const Cat = sequelize.define("cat", {
      name: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      kepUrl: {
        type: Sequelize.STRING
      }
    });
  
    return Cat;
  };