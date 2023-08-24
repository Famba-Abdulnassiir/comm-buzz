import { Paper, Image, NativeSelect, Text, Box, Modal, Loader } from '@mantine/core';
import { Calendar } from '@mantine/dates';
import { useDisclosure } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Events() {
    const eventsUrl = 'https://strapi-kufv.onrender.com/api/events?populate=event_image';
    const [occurrences, setOccurrences] = useState([]);
    const [opened, { open, close }] = useDisclosure(false);
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(eventsUrl)
            .then(response => response.json())
            .then(data => {
                const fetchedEvents = data?.data || [];
                console.log(data)
                setOccurrences(fetchedEvents);
            }).catch(error => {
                console.error("Error fetching data:", error);
                setError('OPPs. An error occurred while fetching data.... Check you internet Connectivity');
            }).finally(() => setIsLoading(false));
    }, [])


    return (
        <>
            <p className="p-4 text-xl font-bold">Calender</p>
            <div className="flex">
                <div className="w-1/3">

                    <Paper position="center" className="ml-3">
                        <Calendar className="ml-4" />
                    </Paper>

                    <Paper className="m-3">
                        <Box maw={330} mx="auto">

                            <Text color="black" className="p-3">
                                Don't miss out on important events around let's help you orgnaise important events
                            </Text>

                            <Image
                                src="https://res.cloudinary.com/dxlqahuqr/image/upload/v1692798871/b1gvtwaqzwer6dk4jrvq.jpg"
                                radius="sm"
                            >

                            </Image>
                        </Box>
                    </Paper>

                </div>

                <div className="events-Container flex flex-col  gap-2 w-11/12 m-5 mt-0">
                    <div className="flex gap-8">
                        <NativeSelect className="flex-1"
                            data={['Online', 'Inperson']}
                            label="Select Event Type of intrest"
                            description=""
                            withAsterisk
                        />
                        <NativeSelect className="flex-1"
                            data={['Any Distance']}
                            label="Select Distance of Intrest"
                            withAsterisk
                        />
                    </div>

                    <div>
                        {error ? (<Text className="text-center err" size="xl">{error}</Text>) : isLoading ? (<div className="loader"><Loader size="xl" className="w-1/5" /> <Text size="lg">Loading....</Text></div>) : (
                            occurrences.map(occurrence => {
                                const { id, attributes } = occurrence || {};

                                if (id && attributes) {
                                    const { event_title, event_date, event_location, event_attendees, event_image, event_details, } = attributes || {};

                                    const image_url = event_image?.data?.attributes?.formats?.small?.url || '';

                                    console.log("Iam the Image" + "" + event_image?.data?.attributes?.formats?.large?.url)

                                    return (
                                        <>
                                            <div key={id} className="mb-3">
                                                <div className="border-t-4 bg-white pr-4 rounded-lg border-t-gray-500 flex flex-row gap-5">
                                                    <div className="w-48 m-3">
                                                        {image_url ? <Image
                                                            src={image_url}
                                                            height={188}
                                                            alt="Profile Image"
                                                        /> : null}
                                                    </div>
                                                    <div className="pt-4 flex justify-between flex-col">

                                                        <div>
                                                            <p className="text-amber-600">{new Date(event_date).toString()}</p>
                                                            <p className="font-bold text-blue-950">{event_title}</p>
                                                            <p className="text-gray-500">{event_location}</p>
                                                        </div>

                                                        <p className="pt-3 pb-3 text-gray-500">{event_attendees}</p>

                                                    </div>
                                                    <div className="pt-4 flex justify-between flex-col">
                                                        <p className="font-bold text-blue-950">Suggested</p>
                                                        <div className="pb-3 text-gray-400">
                                                            <i className="fa-solid fa-share-nodes"></i>
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>


                                            <Modal opened={opened} onClose={close} title="Post Feed" centered>
                                                <p>
                                                    {event_details}
                                                </p>
                                            </Modal>
                                        </>
                                    );

                                }
                                return null
                            })
                        )}

                    </div>

                </div>

            </div>

        </>
    )
}

export default Events;
