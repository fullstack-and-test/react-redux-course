export default function DeleteButton({ itemId }) {
  const handleDelete = () => {
    console.log("Delete item", itemId);
  };

  return <button onClick={handleDelete}>Delete</button>;
}
