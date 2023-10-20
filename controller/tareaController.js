
const { Tarea } = require('../models');

module.exports.save = async (req,res) =>{
    const {titulo,descripcion,completada} = req.body;

    try{
        const tarea = await Tarea.create({titulo,descripcion,completada});
        res.status(201).json({tarea:tarea});
    }
    catch (error) {
        res.status(400).json({error});
    }
}

module.exports.getTareas = async(req,res) =>{
  return Tarea.findAll()
  .then((tarea) => {
    res.status(200).json(tarea);
  })
  .catch((err) => {
    console.log('There was an error querying task', JSON.stringify(err));
    res.status(204).json(err);
  });
}

module.exports.getTareaPorId = async(req,res) =>{
    const {id} = req.params;
    const tarea = await Tarea.findByPk(id);
    if(tarea){
        res.status(200).json(tarea);
    }else{
        res.status(404).json();
    }
    
}

module.exports.putTareaPorId = async(req,res) =>{
    const {id} = req.params;
    const {titulo,descripcion,completada} = req.body;
    
    const tarea = await Tarea.findByPk(id);
    tarea.titulo = titulo;
    tarea.descripcion = descripcion;
    tarea.completada = completada;

    await tarea.save();
    
    if(tarea){
        res.status(202).json(tarea);
    }else{
        res.status(404).json();
    }
  
}


module.exports.deleteTareaPorId = async(req,res) =>{
    const {id} = req.params ;
    const tarea = await Tarea.findByPk(id);
    if (tarea) {
        tarea.destroy()
        res.status(204).json({});
    }else{
        res.status(404).json('No hay tareas con el id: '+id );
    }
}


module.exports.getTareaFilter = async (req, res) => {
    const { completada } = req.params;
    console.log(completada);
    const completadaBool = completada === 'true';
  
    const tareas = await Tarea.findAll({ where: { completada: completadaBool } });
  
    if (tareas.length > 0) {
      res.status(200).json(tareas);
    } else {
      res.status(404).json('No se encontró ninguna tarea con ese filtro');
    }
  };