export default function Label({ label, optional }) {
    return (
        <label htmlFor={label} className="text-sm font-medium capitalize">
            {label}
            {!optional && <span className="text-red-600" > *</span>}
        </label>
    )
}
