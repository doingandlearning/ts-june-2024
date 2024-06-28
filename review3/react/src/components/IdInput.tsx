interface Props {
	id: string
	setId: (newValue: string) => void
}

const IdInput = ({ id, setId }: Props) => (
	<input className="text-input" type="text" value={id} onChange={(e) => setId(e.target.value)} />
);

export default IdInput