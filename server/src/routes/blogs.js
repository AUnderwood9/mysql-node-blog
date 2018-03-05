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
    let tagSet1 = ["web-enabled", "Multi-lateral", "orchestration", "komposer", "pgadmin"];
    let setToSend = {title: req.body.title, content: req.body.content};
    console.log(req.body);
    blogTable.insert(setToSend)
    .then((data) => {
        return data.id;
    })
    .then((blogId) => {
        tagTable.getAll()
        .then((data) => {
            let dataSet = data.map((item) => {
                return {id: item.id, title: item.name};
            })
            let tagId = FilterForIds(dataSet, req.body.tag);

            console.log(dataSet);
            if(tagId === 0){
                return req.body.tag;
            }
            else{
                // pass on tagid found to be inserted into blog tags
                return tagId;
            }
        })
        .then((tagToInsert) => {
            if(isNaN(tagToInsert)){
                // insert tag and return its promise
                return tagTable.insert({name: tagToInsert})
                .then((data) => {
                    // insert inserted tag into blog tags. respond with an ok status if it works
                    blogTagTable.insert({blogid: blogId, tagid: data.id})
                    .then((data) => {
                        res.sendStatus(200);
                    }).catch((err) => {
                        console.log(err);
                        res.sendStatus(400);
                    })
                })
                .catch((err) => {
                    console.log(err);
                    res.sendStatus(400);
                })
            }
            else{
                // pass on tagid found to be inserted into blog tags
                blogTagTable.insert({blogid: blogId, tagid: tagToInsert})
                .then((data) => {
                    res.sendStatus(200);
                }).catch((err) => {
                    console.log(err);
                    res.sendStatus(400);
                })
            }
        })
    })
    .catch((err) => {
        console.log(err);
        res.send(400);
    })
});

export default router;