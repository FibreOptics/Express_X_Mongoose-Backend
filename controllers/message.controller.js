import Message from '../models/message.model';

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Message Test controller!');
};
//create
exports.message_create = function (req, res) {
    let message = new Message(
        {
            sender: req.body.sender,
            message: req.body.message,
            reciever: req.body.reciever
        }
    );
    message.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Message Created successfully')
    })
};
//read
exports.message_details = function (req, res) {
    Message.findById(req.params.id, function (err, message) {
        if (err) return next(err);
        res.send(message);
    })
};
//read all
exports.messages = function (req, res) {
    Message.find((err, messages) => {
        if (err){
            return res.json({ success: false, error: err });
        }
        return res.json({ success: true, data: messages });})
};
//update
exports.message_update = function (req, res) {
    Message.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, message) {
        if (err) return next(err);
        res.send('Message updated.');
    });
};
//delete
exports.message_delete = function (req, res) {
    Message.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};