var express = require('express');
var router = express.Router();

const AlunoService = require("../services/AlunoService");
const { request } = require('express');
const { response } = require('express');

router.get(
    "/listar",
    async (request,response,next) => {
        response.json(await AlunoService.listar())
    }
)

router.get(
    "/:id",
    async (request,response,next) => {
        response.json( await AlunoService.mostrarPorId(request.params.id))
    }
)

router.post(
    "/criar",
    async (request,response,next) => {
        const novoAluno = await AlunoService.criar(request.body)
        response.json(novoAluno)
    }
)

router.put(
    "/atualizar/:id",
    async (request,response,next) => {
        const novoAluno = await AlunoService.atualizar(request.params.id, request.body)
        response.json(novoAluno)
    }
)

router.delete(
    "/deletar/:id",
    async (request,response,next) => {
        const novoAluno = await AlunoService.deletar(request.params.id)
        response.json(novoAluno)
    }
)

module.exports = router;