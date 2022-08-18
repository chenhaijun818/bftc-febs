interface Filter {
    type: 'text' | 'date' | 'timestamp'
    placeholder?: string
    default?: any
    prop: string
}
