import autores from '../models/autor.js'

class autorController {
  static listarAutores = (req, res) => {
    autores.find((err, autores) => {
      res.status(200).json(autores)
    })
  }

  static cadastrarAutor = (req, res) => {
    let autor = new autores(req.body)

    autor.save(err => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao cadastrar autor.` })
      } else {
        res.status(201).send(autor.toJSON())
      }
    })
  }

  static atualizarAutor = (req, res) => {
    const id = req.params.id

    autores.findByIdAndUpdate(id, { $set: req.body }, err => {
      if (!err) {
        res.status(200).send({ message: 'autor atualizado com sucesso' })
      } else {
        res.status(500).send({ message: err.message })
      }
    })
  }

  static listarAutorPorId = (req, res) => {
    const id = req.params.id

    autores.findById(id, (err, autores) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - Id do autor não localizado` })
      } else {
        res.status(200).send(autores)
      }
    })
  }

  static excluirAutor = (req, res) => {
    const id = req.params.id

    autores.findByIdAndDelete(id, err => {
      if (!err) {
        res.status(200).send({ message: 'autor removido com sucesso' })
      } else {
        res.status(500).send({ message: err.message })
      }
    })
  }

  // static listaautor = (''(req, res) => {
  //   let index = buscaautores(req.params.id)
  //   res.json(autores[index])
  // })
}

export default autorController
