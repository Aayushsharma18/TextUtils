import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FamilyComponent = () => {
    const [familyMembers, setFamilyMembers] = useState([]);
    const [newFamilyMember, setNewFamilyMember] = useState({ name: '' });

    useEffect(() => {
        // Fetch family members from the API on component mount
        axios.get('http://localhost:3006/api/familyMembers')
            .then(response => setFamilyMembers(response.data))
            .catch(error => console.error('Error fetching family members:', error));
    }, []);

    const handleCreate = () => {
        axios.post('http://localhost:3006/api/familyMembers', newFamilyMember)
            .then(response => {
                setFamilyMembers([...familyMembers, response.data]);
                setNewFamilyMember({ name: '' });
            })
            .catch(error => console.error('Error creating family member:', error));
    };

    const handleUpdate = (id, updatedName) => {
        axios.put(`http://localhost:3006/api/familyMembers/${id}`, { name: updatedName })
            .then(() => {
                const updatedFamilyMembers = familyMembers.map(member => (
                    member.id === id ? { ...member, name: updatedName } : member
                ));
                setFamilyMembers(updatedFamilyMembers);
            })
            .catch(error => console.error('Error updating family member:', error));
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3006/api/familyMembers/${id}`)
            .then(() => {
                const updatedFamilyMembers = familyMembers.filter(member => member.id !== id);
                setFamilyMembers(updatedFamilyMembers);
            })
            .catch(error => console.error('Error deleting family member:', error));
    };

    return (
        <div>
            <ul>
                {familyMembers.map(member => (
                    <li key={member.id}>
                        {member.name}
                        <button onClick={() => handleUpdate(member.id, `${member.name} (Updated)`)}>Update</button>
                        <button onClick={() => handleDelete(member.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                placeholder="New family member name"
                value={newFamilyMember.name}
                onChange={(e) => setNewFamilyMember({ name: e.target.value })}
            />
            <button onClick={handleCreate}>Create</button>
        </div>
    );
};

export default FamilyComponent;
