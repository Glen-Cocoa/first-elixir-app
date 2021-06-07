defmodule Api.Menu.Item do
  use Ecto.Schema
  import Ecto.Changeset

  schema "items" do
    field :description, :string
    field :name, :string
    field :price, :string

    timestamps()
  end

  @doc false
  def changeset(item, attrs) do
    item
    |> cast(attrs, [:name, :description, :price])
    |> validate_required([:name, :description, :price])
  end
end
