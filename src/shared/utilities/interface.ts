export interface Section {
    id: string
    label: string
    [key: string]: string
}

export interface ListSections {
    data: {
        listSections: {
            items: Array<Section>
            nextToken: string | null
        }
    }
}
