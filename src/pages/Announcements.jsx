
import { useNavigate } from 'react-router-dom';
import { Input, Button, Title, Text, Group, Modal, TextInput, Textarea } from '@mantine/core';
import { IconBellSearch } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';



function Announcements() {
    const [opened, { open, close }] = useDisclosure(false);
    const announcementsUrl = 'http://localhost:1337/api/announcements';
    const postAnnoucementUrl = 'http://localhost:1337/api/announcements';
    const [announcements, setAnnouncements] = useState([]);
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState('')

    //from Mantine useForm we can initialise our values take this as setState in normal react
    const form = useForm({
        initialValues: {
            title: '',
            content: '',
        },
    });

    //Get Announcements from API by use of fetch, display after component load
    useEffect(() => {
        fetch(announcementsUrl)
            .then(response => response.json())

            .then(data => {
                console.log(data)
                const Responseannouncements = data?.data || [];
                setAnnouncements(Responseannouncements)

            });

    }, [])

    //Search for Announcements
    const filteredSearch = announcements.filter(announcement => {
        const { attributes } = announcement || {};

        if (attributes) {
            const { announcement_title, announcement_content } = attributes || {};
            const searchText = search.toLowerCase();

            return (
                
                announcement_title.toLowerCase().includes(searchText) ||
                announcement_content.toLowerCase().includes(searchText)
              
            );
        }
        return false
    });

    //We use this to link it to our button for advanced search but if you look critically well we may not need ot since it searches per xter.
    const handleSearch = () => {
        //Update the search state and trigger filtering...
        setSearch(search)
    }

    const handlePost = (values) => {
        const { title, content } = form.values;
        

        fetch(postAnnoucementUrl, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(
                {
                    "data": {
                        announcement_title: values.title,
                        announcement_content: values.content
                    }
                }
            )
        }).then(response => {
            if (response.ok) {
                // navigate('/dashboard/announcements');
                // window.location.reload(false)
                setError('Announcement successfuly posted')
            } else {
                throw new Error('Please Ensure all the Fields are entered Correctly');
            }
        }).catch(error => {
            console.log(error);
        })

    }

    return (
        <>
            <p className="bg-slate-800 text-white text-2xl pt-4 pl-4">
                Announcements
            </p>
            <div className="flex align-middle justify-center gap-2 bg-slate-800 p-2">
                <div className="w-32">
                    <img src="../src/assets/megaphone2.png" alt="Megaphone image for notifications" />
                </div>
                <div className="flex w-4/5 justify-center align-middle gap-2">
                    <Input className="m-auto w-4/5"
                        icon={<IconBellSearch />}
                        placeholder="Search...."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />

                    <Button className="w-1/5 bg-lime-900 m-auto" onClick={handleSearch}>
                        Search
                    </Button>


                    <Button className="w-1/4 bg-black m-auto" onClick={open}>
                        Create Announcement
                    </Button>

                </div>
            </div>

            {/*Stracture the style of the jsx to be returned
             This will display the overall announcements and filtered announcement.*/}
            <div className="m-auto mt-6" >
                {filteredSearch.map(announcement => {
                    const { id, attributes } = announcement || {};

                    if (id && attributes) {
                        const { announcement_title, announcement_content, createdAt } = attributes || {};

                        return (
                            <div key={id} className="m-6 flex  justify-evenly align-middle">
                                <div className="pr-2 w-2/12">
                                    <Text className="text-gray-600">
                                        {new Date(createdAt).toString()}
                                    </Text>

                                </div>

                                <div className="border-l-2 border-gray-400 pl-3 w-4/5">
                                    <Title className="pb-0 mb-0 text-xl text-gray-900">
                                        {announcement_title}
                                    </Title>
                                    <Text className="mt-0 pt-0 text-gray-600">
                                        {announcement_content}
                                    </Text>

                                </div>

                            </div>


                        )
                    }

                    return null;

                })}

            </div>

            {/*This is a popup that when clicked it will let someone post an annoucement*/}
            <Modal opened={opened} onClose={close} title="Post Announcement" data-autofocus centered>
            <form onSubmit={form.onSubmit(handlePost)}>
                <Group>
                    <TextInput className="w-10/12 m-auto"
                        label="Title"
                        placeholder="Announcement Title"
                        {...form.getInputProps("title")}
                    />
                    <Textarea className="w-10/12 m-auto"
                        label="Description"
                        placeholder="Announcement Details"
                        {...form.getInputProps("content")} />

                </Group>
                <br />
                <Button className="bg-blue-700 m-auto" type="submit">Post</Button>
            </form>
            <Text className="text-green">
                {error}
            </Text>
            </Modal>
        </>
    )
}

export default Announcements;