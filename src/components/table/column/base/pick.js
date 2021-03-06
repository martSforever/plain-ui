export default {
    name: 'pick',
    props: {
        align: {default: 'center'},
        width: {default: '36'},
        sort: {default: false},
        search: {default: false},
        placeLeft: {default: true},
        order: {default: 1000},
        data: {},
        switchOnClickRow: {type: Boolean, default: true},
        import: {default: false},
        export: {default: false},
        formEditable: {default: false},
        batchModify: {default: false},
    },
    data() {
        const that = this
        return {
            p_table: null,
            p_data: [],
            normal(h, dataRow) {
                return (
                    <pl-radio value={that.p_dataIds.indexOf(dataRow.id) > -1} onInput={e => that.pl_input(e, dataRow)} onClick={(e) => e.stopPropagation()} onDblclick={e => e.stopPropagation()}/>
                )
            },
            head() {
                return (
                    <pl-check-all status={that.checkAllStatus} onClick={that.pl_clickCheckAll} label={null}/>
                )
            },
        }
    },
    watch: {
        switchOnClickRow: {
            immediate: true,
            async handler(val) {
                await this.$plain.nextTick()
                !!val ? this.table.$on('clickRow', this.pl_clickRow) : this.table.$off('clickRow', this.pl_clickRow)
            },
        },
    },
    computed: {
        table() {
            if (!this.p_table) {
                this.p_table = this.$plain.$dom.findComponentUpward(this, 'pl-base-table')
            }
            return this.p_table
        },
        p_dataIds() {
            if (!this.p_data) return []
            return this.p_data.map(item => item.id)
        },
        dataIds() {
            return this.data.map(item => item.id)
        },
        checkAllStatus() {
            if (this.dataIds.every(id => this.p_dataIds.indexOf(id) > -1)) return 'all'
            if (this.dataIds.some(id => this.p_dataIds.indexOf(id) > -1)) return 'some'
            return 'none'
        },
    },
    methods: {
        getSelected() {
            return [...(this.p_data || [])]
        },
        clearSelected() {
            this.p_data = []
        },
        pl_clickCheckAll() {
            switch (this.checkAllStatus) {
                case 'all':
                    this.$plain.$utils.removeSome(this.p_data, data => this.dataIds.indexOf(data.id) > -1)
                    break
                case 'some':
                    this.p_data = [...this.data, ...this.p_data]
                    break
                case 'none':
                    this.p_data = [...this.data, ...this.p_data]
            }
        },
        pl_input(val, dataRow) {
            const index = this.p_dataIds.indexOf(dataRow.id)
            if (!!val) {
                index === -1 && this.p_data.push(dataRow)
            } else {
                index > -1 && this.p_data.splice(index, 1)
            }
        },
        pl_clickRow({item}) {
            const val = this.p_dataIds.indexOf(item.id) > -1
            this.pl_input(!val, item)
        },
        checkRow({id, index}) {
            const dataRow = this.$plain.$utils.findOne(this.data, (item, i) => item.id === id || i === index)
            if (!!dataRow) this.pl_input(true, dataRow)
            else {
                console.warn('no match id in data rows,id:' + id)
            }
        },
        uncheckRow({id, index}) {
            const dataRow = this.$plain.$utils.findOne(this.data, (item, i) => item.id === id || i === index)
            if (!!dataRow) this.pl_input(false, dataRow)
            else {
                console.warn('no match id in data rows,id:' + id)
            }
        },
    },
    beforeDestroy() {
        this.p_data = []
        !!this.switchOnClickRow && this.table.$off('clickRow', this.pl_clickRow)
    }
}
