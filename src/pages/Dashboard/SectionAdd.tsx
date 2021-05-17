import React, { useState } from 'react'
import Amplify from 'aws-amplify'

import awsmobile from '../../aws-exports'
import { createNewSection } from '../../shared/utilities/mutate'

Amplify.configure(awsmobile)

const SectionAddForm = () => {
    const [name, setName] = useState<string>('')

    const onSubmit = async (event: any) => {
        event.preventDefault()
        if (name !== undefined || name !== '') {
            try {
                const section = await createNewSection(name)
                console.log(section)
            } catch (error) {
                console.error('SectionAdd.tsx', error)
                return
            }
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <div style={{ margin: '15px' }}>
                <label htmlFor="_add_section_name">Section Name</label>
                <input
                    id="_add_section_name"
                    type="text"
                    value={name}
                    onChange={(event: any) => {
                        setName(event.target.value)
                    }}
                />
            </div>
            <div style={{ margin: '15px' }}>
                <input type="submit" value="Create section" />
            </div>
        </form>
    )
}

const SectionAdd = () => {
    return (
        <div>
            <h1>Section Add</h1>
            <SectionAddForm />
        </div>
    )
}

export default SectionAdd
