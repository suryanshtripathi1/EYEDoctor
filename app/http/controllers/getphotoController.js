const Image = require('../../models/image')
const User = require('../../models/user')

function getphotoController(){
    return{
        index(req,res){
            res.render('getimage')
        }

        // async getimage(req, res) {
        //     try {
        //         // Fetch the image from MongoDB
        //         const image = await Image.findOne();
        //         if (!image) {
        //             throw new Error('Image not found');
        //         }

        //         // Set appropriate headers to indicate that the response contains an image
        //         res.set('Content-Type', 'image/png'); // Assuming the image format is PNG
        //         res.set('Content-Disposition', 'inline'); // Display image in browser

        //         // Send the image data as response
        //         res.send(Buffer.from(image.imageData, 'base64'));
        //     } catch (error) {
        //         console.error('Error fetching image:', error);
        //         res.status(500).send('Error fetching image');
        //     }
        // }
    }
}

module.exports = getphotoController