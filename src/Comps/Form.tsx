/*
might split the form into sections (so can add titles) OR give the option to add titles
anyways, the TS will be enforced tighter with dependency on fields


LOGIC:

validation - only on submit

when fields are dependent on other fields - we will validate these fields when action happens on self field
*/

import classname from "classnames";
import { useForm } from "react-hook-form";

type fieldTypes = "SELECT" | "TEXT_FIELD" | "DATE" | "SELECTIONS_LIST" | "BUTTON";
interface iSelectable {
    id: string | number,
    value: string
}

interface iBasicField {
    id: string,
    title: string,
    width?: number, // must be between 1 to 12
    fieldType: fieldTypes,
    dependsOn?: string, // a key
    dependentMustBe?: { // only if dependsOn is also supplied
        type: "EQUALS" | "WITH_VALUE"
        value?: any,
    },
}

interface iTextField extends iBasicField {
    inputType?: "number" | "text" | "date" 
}


interface iButtonField extends iBasicField {
    onAction?: (dependOnValue: any) => void
}

interface iMultipleField extends iBasicField {
    options?: iSelectable[],
    values?: any[],
    onChange: (selectedValues: any[]) => void
}

type iField = iTextField | iButtonField | iMultipleField;

const Form = () => {
    const { register, handleSubmit, getValues, trigger, formState: {errors}, getFieldState } = useForm();
    const parseTextField = (field: iTextField) => {
        const className = classname("form-control")
        const span = field.width ? `span ${field.width} / span ${field.width}` : "1 / -1"
        return (
            <div className={className} style={{gridColumn: span}}>
                <label className="label">
                    <span className="label-text">{field.title}</span>
                </label>
                <input type={field.inputType} placeholder={field.title} className="input input-bordered" {...register(field.id, {required: true,})}/>
            </div>
        )
    }

    const parseButtonField = (field: iButtonField) => {
        const span = field.width ? `span ${field.width} / span ${field.width}` : "1 / -1";
        const onButtonClick = async () => {
            if (!(field.onAction && field.dependsOn)){
                console.log(field.id, "does not have a dependency function")
            }
            await trigger(field.dependsOn);
            field.onAction && field.onAction({errors: getFieldState(field.dependsOn!).error, value: getValues(field.dependsOn!)})
        }
        return (
            <button className="btn" type="button" onClick={onButtonClick} style={{gridColumn: span}}>{field.title}</button>
        );
    }
    
    const Field = ({field} : {field: iField}) => {
        switch (field.fieldType) {
            case "TEXT_FIELD": return parseTextField(field);
            case "BUTTON": return parseButtonField(field);
        }
    } 


    console.log("rerender");
    const fields: iField[] = [
        {
            id: "carnumber",
            inputType: "text",
            title: "מספר מכונית",
            fieldType: "TEXT_FIELD",
            width: 4
        },
        {
            id: "search_car",
            title: "חיפוש",
            fieldType: "BUTTON",
            width: 1,
            dependsOn: "carnumber",
            dependentMustBe: {
                type: "WITH_VALUE"
            },
            onAction: (dependentValue: any) => {console.log(dependentValue)},
        }
    ]

    
    return (
        <form className="grid grid-cols-12 items-end gap-3" onSubmit={handleSubmit((data) => console.log(data))}>
            {
                fields.map(field => <Field field={field} key={field.title} />)
            }
            <button type="submit" className="btn btn-primary col-span-full">הגש</button>
        </form>
    )
};

export default Form;