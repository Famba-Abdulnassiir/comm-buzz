import { Card, Image, Text, Badge, Button, Group, TextInput } from '@mantine/core';
import { IconBellSearch } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'boxicons'


function People() {
    const userUrl = "http://localhost:1337/api/people?populate=profile_pic";
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');


    useEffect(() => {
        fetch(userUrl)
            .then(response => response.json())
            .then(data => {
                const fetchedUsers = data?.data || [];
                console.log(data)
                setUsers(fetchedUsers)
            });
    }, [])

    //Search for Announcements
    const filteredSearch = users.filter(user => {
        const { attributes } = user || {};

        if (attributes) {
            const { name, occupation } = attributes || {};
            const searchText = search.toLowerCase();

            return (
                
                name.toLowerCase().includes(searchText) ||
                occupation.toLowerCase().includes(searchText)
              
            );
        }
        return false
    });


    return (
        <>
            <div className="m-5 ml-8 mb-0">
                <h2 className="pb-3 text-gray-900 text-xl">People ({users.length})</h2>
                <TextInput className="w-4/5"
                    icon={<IconBellSearch />}
                    placeholder="Search..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </div>

            <div className="flex flex-row flex-wrap gap-3 ml-8 mt-3">

            
                {
                    filteredSearch.map(person => {
                        
                        const {id, attributes} = person;
                        const {name,location, followers,occupation,projects_done, profile_pic} = attributes;
                        const  user_image = profile_pic?.data?.attributes?.formats?.small?.url || '';

                        if(id && attributes){                            
                            
                        return(
                        < div key={id} className="person-card"  >
                            <div>
                                <Card shadow="sm" padding="lg" radius="md" withBorder className='flex flex-col flex-wrap'>
                                    <Card.Section>
                                        <Image
                                            src={user_image}
                                            height={188}
                                            alt="Profile Image"
                                        />
                                    </Card.Section>
        
                                    <div className="mt-2 mb-2">
                                        <Text weight={300} >{name}</Text>
                                        <Text size="sm" className="text-gray-700" >{location}</Text>
                                    </div>
        
        
        
                                    <div className="mb-2">
                                        <Text size="sm" color="dimmed" >Followers</Text>
                                        <Group>
                                            <i className="fa-solid fa-users text-gray-500"></i>
                                            <Text size="sm" className="text-gray-700">{followers}</Text>
                                        </Group>
                                    </div >
        
        
                                    <div className="mt-2 mb-2">
                                        <Text size="sm" color="dimmed" >Occupation</Text>
                                        <Group>
                                            <i className="fa-solid fa-briefcase text-gray-500" ></i>
                                            <Text size="sm" className="text-gray-700" >{occupation}</Text>
                                        </Group>
        
                                    </div>
        
                                    <div className="mt-1">
                                        <Text size="sm" color="dimmed" >Done Projects</Text>
                                        <Group>
                                            <i class="fa-solid fa-list-check text-gray-500"></i>
                                            <Text size="sm" className="text-gray-700" >{projects_done} Projects</Text>
                                        </Group>
                                    </div>
        
                                    {/* <Link to={}> */}
                                    <Button disabled href="fans.selecter22@gmail.com" fullWidth mt="md" radius="md" className="bg-gray-100 text-gray-700 border-2 border-gray-200">
                                        <i className="fa-regular fa-comment mr-2"></i><a href="0704590094">Message</a>
                                    </Button>
                                    {/* </Link> */}
                                </Card>
        
                            </div>
                        </div>
                        )
                        } else return null;
                    })
                }
            </div>

            

        </>

    )

}

export default People;