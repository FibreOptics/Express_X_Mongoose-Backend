import User from '../models/user.model';

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.json('Greetings from the User Test controller!');
};
//create
exports.user_create = function (req, res) {
    console.log(req.body);
    let user = new User(
        {
            name: req.body.name,
            email: req.body.email,
            pass: req.body.pass,
            friends: req.body.friends || [],
            online: false
        }
    );
    user.save(function (err) {
        if (err) {
            return next(err);
        }
        res.json('User Created successfully')
    })
};
//read with id
exports.user_details_bid = function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) return next(err);
        res.json(user);
    })
};
//read with email
/* exports.user_details_bmail = function (req, res) {
    User.findOne({email:req.params.email}, function (err, user) {
        if (err) return next(err);
        res.json(user);
    })
}; */
exports.user_details_bmail = function (req, res) {
    console.log(req.params);
        User.find({ email : req.params.email , pass : req.params.pass}, 
            function (err, user) {
                console.log(user);
                if (err){
                    return res.json(err);
                }
                if(user.constructor === Array && user.length === 0){
                    return res.json({auth:false});
                }
                else{     
                    return res.json({auth:true, data: user});
                }
    })
};
//read all
exports.users = function (req, res) {
    User.find((err, users) => {
        if (err){
            return res.json({ success: false, error: err });
        }
        return res.json({ success: true, data: users });
    })
};
//update
exports.user_update = function (req, res) {
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
        if (err) return next(err);
        res.json('User updated.');
    });
};
//delete
exports.user_delete = function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.json('Deleted successfully!');
    })
};