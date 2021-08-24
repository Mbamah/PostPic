import {useState} from 'react'

function UploadForm() {
    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)

    // set types of image format
    const types = ['image/png', 'image/jpeg']
   const handleChange = (e) =>{
        let selectedImage = e.target.files[0]
        console.log(selectedImage);

        if (selectedImage && types.includes(selectedImage.type)) {
          setFile(selectedImage);
          setError('')
        } else{
            setFile
            setError('Please select an image file (png or jpeg)')
        }
    }
    return (
        <form>
            <input type="file" onChange={handleChange} />  
            <div>
                {error && (<div>{error}</div>)}
                {file && (<div>{file.name}</div>)}
            </div> 
        </form>
    )
}

export default UploadForm
