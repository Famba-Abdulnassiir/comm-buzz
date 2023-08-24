import { Text, Paper, Title, Loader, Notification, Button, Group, Badge, Modal, TextInput,Textarea} from '@mantine/core';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { IconCheck, IconX } from '@tabler/icons-react';

function Jobs() {
    const [jobs, setJobs] = useState([]);
    const [opened, { open, close }] = useDisclosure(false);
    const jobsUrl = 'https://strapi-kufv.onrender.com/api/jobs';
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [successMessage, setSuccessMessage] = useState('');


     //from Mantine useForm we can initialise our values take this as setState in normal react
     const form = useForm({
        initialValues: {
            title: '',
            location: '',
            nature:'',
            salary:'',
            link:'',
            mini_desc:'',
        },
    });

    useEffect(() => {
        fetch(jobsUrl)
            .then(response => response.json())
            .then(data => {
                const fetchedJobs = data?.data || [];
                setJobs(fetchedJobs)

            }).catch(error => {
                console.error("Error fetching data:", error);
                setError('OPPs. An error occurred while fetching data.... Check you internet Connectivity');
            }).finally(() => setIsLoading(false));

    }, [])

    const handlePost = (values) => {
        const {title,location,nature,salary,link,mini_desc} = form.values;
        
        setIsLoading(true);        

        fetch(jobsUrl, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(
                {
                    "data": {
                        job_title: values.title,
                        job_location: values.location,
                        job_nature: values.nature,
                        job_salary: values.salary,
                        job_link: values.link,
                        job_mini_desc:values.mini_desc


                    }
                }
            )
        }).then(response => {
                if (response.ok) {
                    setSuccessMessage('Post Successfully Uploaded')
                    form.reset();

                    setTimeout(() => {
                        close();
                        setSuccessMessage("");                                
                    }, 2300);    

                    window.location.reload(false);

            } else {
                throw new Error('Please Ensure all the Fields are entered Correctly');
            }
        }).finally(() => setIsLoading(false));
        
    }



    return (
        <>
            <Paper className="bg-slate-800 text-white text-2xl">
                <Text className="font-bold text-xl p-5">Looking for A place to Hire Talent or Find a job within your Community or Remote, Look no further Comm Buzz got you covered</Text>

                <Group>
                    <Button right onClick={open} className="text-center bg-blue-800 ml-7 mb-2"> Post a Job</Button>
                </Group>

            </Paper>

            <div >
                {error?(<Text className="text-center err" size="xl">{error}</Text>):isLoading?(<div className="l-jobs"><Loader size="xl" className="w-1/5"/> <Text size="lg">Loading....</Text></div>):(
                    jobs.map(job => {
                        const { id, attributes } = job || {};

                        if (id && attributes) {
                            const { job_title, job_location, job_nature, createdAt, job_salary, job_mini_desc, job_link } = attributes || {}

                            return (
                                <div key={id}>
                                    <Paper shadow="xs" p="md" className="m-5 border-solid">
                                        <Title className="text-2xl hover:underline text-blue-950"><Link to={job_link}>{job_title}</Link></Title>
                                        <Text className="text-gray-700">
                                            {job_mini_desc}
                                        </Text>
                                        <div className="flex justify-between mt-4 align-middle ">

                                            <Badge color="white" className="text-sm" variant="light">
                                                {new Date(createdAt).toString()}

                                            </Badge>

                                            <Badge className="text-sm" >{job_location}
                                            </Badge>

                                            <Badge className="text-sm">
                                                {job_salary}</Badge>

                                            <Badge className="text-sm">
                                                {job_nature}</Badge>

                                            <Button variant="white">
                                                <Link to={job_link}>Apply for this Job</Link>
                                            </Button>

                                        </div>
                                    </Paper>
                                </div>)
                        }
                    })
                )}

            </div>

             {/* Display our Modal from which the user will enter the details to post */}
             <Modal opened={opened} onClose={close} title="Post Announcement" centered>
            <form onSubmit={form.onSubmit(handlePost)} >
                <Group>
                    <TextInput className="w-10/12 m-auto"
                        label="Job Title"
                        placeholder="Enter Job Title"
                        {...form.getInputProps("title")}
                    />
                    <TextInput className="w-10/12 m-auto"
                        label="Job Location"
                        placeholder="Online or Phyaical Location"
                        {...form.getInputProps("location")}
                    />
                    <TextInput className="w-10/12 m-auto"
                        label="Job nature"
                        placeholder="Contract, Hourly, Remote or part time"
                        {...form.getInputProps("nature")}
                    />
                    <TextInput className="w-10/12 m-auto"
                        label="Salary Range"
                        placeholder="$10 - $20 per hr or $300 per Month"
                        {...form.getInputProps("salary")}
                    />
                    <TextInput className="w-10/12 m-auto"
                        label="Job External Link"
                        placeholder="External company Link for more details"
                        {...form.getInputProps("link")}
                    />                  
                    <Textarea className="w-10/12 m-auto"
                        label="Mini Description"
                        placeholder="Few lines of What is entiled in this Job....."
                        {...form.getInputProps("mini_desc")} />

                </Group>
                <br />
                <Button className="bg-blue-700 m-auto" type="submit">Post</Button>
            </form>
            {successMessage && (<Notification icon={<IconCheck size="1.1rem" />} color="teal" title="Successfully made a post.">
                    {successMessage}                  
                </Notification>)}

                {isLoading && (<Loader size="md"  className="m-auto"/>)}
            </Modal>
        </>
    );
}

export default Jobs;
