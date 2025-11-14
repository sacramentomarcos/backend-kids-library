SELECT
  emp.id_emprestimo AS idemprestimo,
  usu.codigo_familia AS codigofamilia,
  usu.nome_completo AS nomecompleto,
  liv.titulo,
  emp.data_realizado_em AS datarealizadoem
FROM
  (
    (
      emprestimos emp
      LEFT JOIN livros liv ON ((liv.id_livro = emp.id_livro))
    )
    LEFT JOIN usuarios usu ON ((usu.id_usuario = emp.id_usuario))
  );