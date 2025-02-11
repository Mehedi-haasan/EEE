import { useState } from "react"
import Button from "../Input/Button"
import InputComponent from "../Input/InputComponent"
import Modal from "../Input/Modal"

const Category = () => {

    const [image_url, setImage_Url] = useState();
    const [values, setValues] = useState({ name: "", });
    const [show, setShow] = useState(false)

    const handleCreate = async (image_url) => {

        values.image_url = image_url;
        const token = localStorage.getItem('token');
        try {
            const response = await fetch('http://localhost:8050/api/create/category', {
                method: 'POST',
                headers: {
                    'authorization': token,
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify(values),
            });

            const data = await response.json();
            setShow(false)
            alert(data?.message)
        } catch (error) {
            console.error('Error updating variant:', error);
        }
    }




    const handleUpload = async () => {
        const formData = new FormData();
        if (image_url) {
            formData.append('image_url', image_url);
        } else {
            console.error("Image file is missing in the payload");
            return;
        }

        const token = localStorage.getItem('token');

        try {
            const response = await fetch('http://localhost:8050/api/upload/image', {
                method: 'POST',
                headers: {
                    'authorization': token,
                },
                body: formData,
            });

            const data = await response.json();
            if (data) {
                handleCreate(data.image_url)
            }
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    }
    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">Category</h1>
                <Button isDisable={false} name="Add Category" onClick={() => { setShow(true) }} className="" />
            </div>
            <div>
                <Modal show={show} handleClose={() => { setShow(false) }} size="500px" className="">
                    <div className="pt-1">
                        <InputComponent placeholder={`Enter Category name`} label={`Category name`} onChange={(e) => { setValues({ ...values, name: e }) }} className='lg:text-lg' />
                        <div className="pt-1">
                            <h1 className="py-1 font-semibold">Select image</h1>
                            <input accept="image/*" onChange={(e) => { setImage_Url(e.target.files[0]) }} type='file' />
                        </div>
                        <Button isDisable={false} name="Create" onClick={handleUpload} className="mt-3" />
                    </div>
                </Modal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">

            </div>
        </div>
    )
}

export default Category