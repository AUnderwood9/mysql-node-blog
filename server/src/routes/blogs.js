import { Router } from "express";
import Table from "../table";
import { FindElementsInSet, FilterForIds } from "../myUtilities";

let router = Router();
const blogTable = new Table("blogs");
const tagTable = new Table("tags");
const blogTagTable = new Table("blogtags");

router.get('/:id', (req, res) => {
    blogTable.getOne(req.params.id)
    .then((response) => {
        res.json(response);
    })
    .catch((err) => {
        res.sendStatus(400);
    })
})

router.get('/', (req, res) => {
    // res.json(people);
    blogTable.getAll()
    .then((response) => {
        res.json(response);
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(400);
    });

});

router.post('/', (req, res) => {
    // console.log("starting", req.body);
    let tagSet1 = ["web-enabled", "Multi-lateral", "orchestration", "komposer", "pgadmin"];
    let setToSend = {title: req.body.title, content: req.body.content};
    console.log(req.body);
    // res.send(req.body);
    // res.send({title: req.body.title, content: req.body.content});
    // res.send(blogTable.insert(req.body));
    // blogTable.insert(setToSend)
    // .then((data) => {
    //     return data.id;
    // })
    // .then((blogId) => {
    //     tagTable.getAll()
    //     .then((data) => {
    //         res.send(data);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })
    // })
    // .catch((err) => {
    //     console.log(err);
    //     res.send(400);
    // })

        tagTable.getAll()
        .then((data) => {
            // console.log(data);
            let dataSet = data.map((item) => {
                return {id: item.id, title: item.name};
            })
            let tagId = FilterForIds(dataSet, req.body.tag);
            // res.send(tagId);
            console.log(dataSet);
            res.send(tagId.toString());
        })
        .catch((err) => {
            console.log(err);
        })

})

export default router;