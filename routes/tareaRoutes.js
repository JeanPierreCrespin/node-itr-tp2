const {Router} = require('express')

const tareaController = require('../controller/tareaController')


const router = Router()
router.post('/tarea', tareaController.save)

router.get('/tarea', tareaController.getTareas)

router.get('/tarea/:id', tareaController.getTareaPorId)

router.put('/tarea/:id', tareaController.putTareaPorId)

router.delete('/tarea/:id', tareaController.deleteTareaPorId)

router.get('/tarea/filter/:completada', tareaController.getTareaFilter)


module.exports = router