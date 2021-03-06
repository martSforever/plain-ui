export default {
    name: 'ov',
    props: {
        type: {type: String},
        parentType: {},
        parentCode: {},
        parentCodeField: {},
        parentMsg: {default: '请先选择父选项'},
        formatter: {
            default() {
                return ({value, rowData}) => {
                    return this.$ov.getLabel(this.type, value)
                }
            },
        },
        searchType: {default: 'ov'},
    },
    data() {
        const that = this
        const {type, parentType, parentCode, parentCodeField, parentMsg} = this
        const externalProp = {type, parentType, parentCode, parentCodeField, parentMsg}
        return {
            edit(h, {row, editRow, col, colIndex, require, prop, required}) {
                return (<pl-ov {...{
                    props: {
                        ...prop,
                        ...that.publicProps,
                        ...externalProp,
                        value: editRow[col.field],
                        required,
                        before: (val) => that.pl_before({row, editRow, col, colIndex, require, prop, required}, val),
                        after: (val) => that.pl_after({row, editRow, col, colIndex, require, prop, required}, val),
                        row: editRow,
                        showField: col.field,
                    },
                    on: {input: (val) => this.$set(editRow, col.field, val),}
                }}/>)
            },
            externalProp,
        }
    },
    methods: {
        async pl_before(dataRow, val) {
            if (!!this.prop.before) await this.prop.before(dataRow, val)
        },
        async pl_after(dataRow, val) {
            if (!!this.prop.after) await this.prop.after(dataRow, val)
        },
    },
}
