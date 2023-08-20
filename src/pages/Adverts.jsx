import { Card, Image, Text, Button, Paper, Title, FileInput, rem, Modal, Group, TextInput} from '@mantine/core';
import { useState, useEffect } from 'react';
import { IconUpload } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';


function Adverts() {
    const [adverts, setAdverts] = useState([])
    const advertsUrl = 'http://localhost:1337/api/adverts?populate=advert_image';
    const uploadUrl ="http://localhost:1337/api/uploads";
    const [selectedFile, setSelectedFile] = useState(null);
    const [opened, { open, close }] = useDisclosure(false);
    const [error, setError] = useState('')

    //from Mantine useForm we can initialise our values take this as setState in normal react
    const form = useForm({
        initialValues: {
            post_title: '',
            post_link: '',
            post_description:''
        },
    });

    useEffect(() => {
        fetch(advertsUrl)
            .then(response => response.json())
            .then(data => {
                const fetchedAdverts = data?.data || [];
                setAdverts(fetchedAdverts)

            })
    }, [])

    //Handle Image upload first before we can handle entire post for adverts
    //When someone adds a file to our file in put lets post it to the strapi side get a response we can use it as our file to be posted

    const handleImageUpload = () => {  

        if(selectedFile){
            const formData = new FormData();
            formData.append("files", selectedFile);

            fetch(uploadUrl, {
                method:"POST",
                body:formData
            })
            .then(response => response.json())
            .then(data => {
                //Here we save the Image Id to our Application that we shall later use to post data to out Advert page.
                const fileId = data[0].id;
                console.log(fileId)
            })
        }
    }

    //After here we can handle our submit logic like add other feilds we want to submit with the button.
    const handleAdvertSubmit = (values) => {
        handleImageUpload();

        const {post_title, post_link, post_description} =form.values

        fetch(advertsUrl,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify({
                advert_title:values.post_title,
                advert_link:values.post_link,
                advert_description:values.post_description,
                // advert_image:fileId
            })
        })
        .then(response => {
            response.json()
            if(response.ok){
                setError('Advert Successfull Uploaded')
            } else {
                throw new Error('Please Ensure all the Fields are entered Correctly');
            }
        })

    }

    return (
        <>
            <Paper className="bg-slate-800 text-white text-2xl">
                <Title className="text-center">
                    Comm Buzz <span className="text-2xl text-gray-200">Ads</span>
                </Title>
                <Text className="font-bold text-xl text-center">Advertise with Us and reach 1000s of Customers</Text>
                <Button className="text-center bg-blue-800 ml-7 mb-2" onClick={open}> Post An Advert</Button>
            </Paper>
            <div className="m-10 flex  flex-row flex-wrap gap-3 h-3/5">
                {
                    adverts.map(advert => {
                        const { id, attributes } = advert || {};

                        if (id && attributes) {
                            const { advert_title, advert_link, advert_description, advert_image } = attributes || {}
                            const imageUrl = advert_image?.data?.attributes?.formats?.small?.url || '';

                            return (
                                <div key={id} className="advert-card">

                                    <Card className="ads-card"
                                        shadow="sm"
                                        padding="xl"
                                        component="a"
                                        href={advert_link}
                                        target="_blank"
                                    >
                                        <Card.Section>
                                            <Image
                                                src={imageUrl}
                                                height={160}
                                                alt="No way!"
                                            />
                                        </Card.Section>

                                        <Text weight={500} size="lg" mt="md">
                                            {advert_title}
                                        </Text>

                                        <Text mt="xs" color="dimmed" size="sm">
                                            {advert_description}
                                        </Text>
                                    </Card>
                                </div>


                            )

                        }
                        return null;
                    })
                }
            </div>

            {/*This is a popup that when clicked it will let someone post an annoucement*/}
            <Modal opened={opened} onClose={close} title="Post Announcement" data-autofocus centered>
                <form onSubmit={form.onSubmit(handleAdvertSubmit)}>
                    <Group>
                        <TextInput className="w-10/12 m-auto"
                            label="Advert Title"
                            placeholder="Input Advert Title"
                            {...form.getInputProps("post_title")}
                        />
                          <TextInput className="w-10/12 m-auto"
                            label="Advert External Link"
                            placeholder="Enter Advert External Link"
                            {...form.getInputProps("post_link")}
                        />
                          <TextInput className="w-10/12 m-auto"
                            label="Advert Short Description"
                            placeholder="Enter Advert Short Description "
                            {...form.getInputProps("post_description")}
                        />
                        <input type='file'                       
                            label="Advert Image" 
                            placeholder="Upload Your Image" 
                            accept="image/png,image/jpeg,image/jpg"
                            onChange={(e) => setSelectedFile(e.target.files[0])}
                            icon={<IconUpload size={rem(14)}/>}           
                             />

                    </Group>
                    <br />
                    <Button className="bg-blue-700 m-auto" type="submit">Post</Button>
                </form>
                <Text className="text-green">
                    {error}
                </Text>
            </Modal>

        </>

    );
}

export default Adverts;