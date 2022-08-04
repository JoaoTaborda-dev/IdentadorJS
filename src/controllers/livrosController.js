import livros from '../models/livros.js'

class LivroController {
  static listarLivros = (req, res) => {
    livros.find((err, livros) => {
      res.status(200).json(livros)
    })
  }

  static cadastrarLivro = (req, res) => {
    let livro = new livros(req.body)

    livro.save(err => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao cadastrar livro.` })
      } else {
        res.status(201).send(livro.toJSON())
      }
    })
  }

  // static listaLivro = (''(req, res) => {
  //   let index = buscaLivros(req.params.id)
  //   res.json(livros[index])
  // })
}

export default LivroController
