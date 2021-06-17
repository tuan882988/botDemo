var init = (app: any) => {
    app.post('/', async (req: any, res: any) => {

        let message = "Chúc bạn một ngày tốt lành!"

        if (req.body.type === "ADDED_TO_SPACE") {
            if (req.body.space.type === "ROOM") {
                message = "Xin chào, mọi người cho mình tham gia cùng nào!"
            } else {
                message = "Cảm ơn vì đã kết bạn với mình ^_^ Bạn có đang cô đơn không?"
            }
        } else if (req.body.type === "MESSAGE") {

        }

        return res.json({text: message})
    })
}


module.exports = init;


