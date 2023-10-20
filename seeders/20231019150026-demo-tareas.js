'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Tareas', [
      {
        titulo: 'Tarea 1',
        descripcion: 'Descripción de la Tarea 1',
        completada: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Tarea 2',
        descripcion: 'Descripción de la Tarea 2',
        completada: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Tareas', null, {});
  }
};
