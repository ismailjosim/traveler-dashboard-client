
// const imageHostKey = process.env.REACT_APP_imgbb_key


// Function to upload an image and return the image URL
export const uploadImage = async (image) => {
    const url = `https://api.imgbb.com/1/upload?key=8784f059c8097f3ce0aa915cedbea793`;
    const formData = new FormData();
    formData.append('image', image);

    const res = await fetch(url, {
        method: 'POST',
        body: formData
    });
    const imgData = await res.json();
    return imgData?.data?.url;
};

