const Image = require('../../models/image')
const User = require('../../models/user')

function photoController() {
    return{
        index(req,res){
            res.render('photo')
        },

        async saveImage(req,res){
            const userId = req.user._id; // Get the logged-in user ID from the request

            // Find the user
            const user = await User.findById(userId);

            // Assuming the image data is sent as a string in the request body
            const { imageData } = req.body;

            const image = new Image({
                user: user._id,
                imageData: imageData,
            });
            image.save().then((result) => {
                return res.redirect('/');
            }).catch((err) =>{
                return res.redirect('/');
            });
        },

        // async getimage(req,res){
        //     // Fetch the image from MongoDB
        // const image = await Image.findOne();
        // // Set appropriate headers to indicate that the response contains an image
        // res.set('Content-Type', 'image/png'); // Assuming the image format is PNG
        // res.set('Content-Disposition', 'inline'); // Display image in browser
        // // Send the image data as response
        // res.send(Buffer.from(image.imageData, 'base64'));
        // }
        async getimage(req, res) {
            try {
                // Fetch the image from MongoDB
                const image = await Image.findOne();
                if (!image) {
                    throw new Error('Image not found');
                }

                // Set appropriate headers to indicate that the response contains an image
                res.set('Content-Type', 'image/png'); // Assuming the image format is PNG
                res.set('Content-Disposition', 'inline'); // Display image in browser

                // Send the image data as response
                res.send(Buffer.from(image.imageData, 'base64'));
            } catch (error) {
                console.error('Error fetching image:', error);
                res.status(500).send('Error fetching image');
            }
        }
    }
}

module.exports = photoController