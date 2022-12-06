// const Visitor = require("../model/Visitor");
const { Visitor } = require("../model");
//모델에서 비지터만가져오겠다 객체구조분해할당한것.

exports.visitor = async (req, res) => {
    let result = await Visitor.findAll()
    res.render("visitor", {data:result});
    // Visitor.findAll()
    // .then((result)=>{
    //     console.log(result);
    //     console.log("id", result[0].id);
    //     res.render("visitor", {data:result});
    // })

    // 원래 뭘해야 sql문으로 -> select * from visitor;

    // Visitor.get_visitor(function(result){
    //     console.log(result);
    //     res.render("visitor", {data: result});
    // })
}




// exports.register = (req, res) => {
    
//     let data = {
//         name : req.body.name,
//         comment : req.body.comment
//     }

//     Visitor.create(data)
//     .then((result)=>{
//         console.log(result);
//         res.send(String(result.id));
//     })

    //insert into visitor(name.comment) values( '${req.body.name}'.......)
    // Visitor.register_visitor( req.body, function(id){
    //     console.log(id);
    //     res.send(String(id));
    // })



// Register async + await 문법
exports.register = async (req, res) => {
    let data = {
        name: req.body.name,
        comment: req.body.comment
    }
    let result = await Visitor.create(data);
    res.send(String(result.id));



}

exports.delete = (req, res) => {
    Visitor.destroy({
        where: { id: req.body.id }
    })
    .then((result)=>{
        console.log(result);
        res.send(true);
    })

    //delte from visitor where id = ${req.body.id}
    // mysql req.body.id에 해당하는 데이터를 delete
    // 서버 응답 res.send 

    // Visitor.delete_visitor(req.body.id, function(){
    //     res.send(true);
    // })없는 함수니까 주석처리~~
}

exports.get_visitor_by_id = (req, res) => {
    // req.query.id 에 해당하는 데이터를 조회
    // 서버 응답 > 조회한 데이터
    // Visitor.findAll({
    //     where : {id: req.query.id},
    //     limit : 1
    // })

    // select id, name, comment from visitor
    // select id, name, comment from visitor order by id ASC..혹은 DESC.. 원래 sql문 이랬다면,,, 아래...
    //아래 findOne이나 findAll에만 쓴다..?
    Visitor.findOne({ 
        attributes: ["id", "name", "comment"],
        where : { id: req.query.id },//id가 req.query.id 인걸 하나 찾겠다.
        order: [["id", "DESC"]],
        limit: 1
    })
    .then ((result) => {
        res.send(result);
    })

exports.get_visitor_by_id = async(req, res) => {
    let result = await Visitor.findOne()
    res.render("get_visitor_by_id", {id: req.query.id});
}
      
res.render("visitor", {data:result});
   




    //select * from visitor where id = req.query.id;
    // Visitor.get_visitor_by_id_model(req.query.id, function(rows){
    //     res.send(rows);
    // });
}

exports.update_visitor = (req, res) => {
    let data = {
        name: req.body.name,
        comment: req.body.comment
    }
    Visitor.update(data, {
        where: {id: req.body.id}
    }) 
    .then((result)=>{
        console.log(result);
        res.send(true);
    })


    //update visitor set name='${req.body.name}', comment=.....-sql문
    // req.body 데이터를 mysql 에 update 할 수 있도록
    // 서버의 응답 
    // Visitor.update_visitor(req.body, function(){
    //     res.send(true);
    // });
}
