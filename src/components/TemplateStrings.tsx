import { useState } from "react";

export default function TemplateStrings() {
    //ejercicio 1.1 al 1.2
    const a = 10;
    const b = 5;

    //1.3 y 1.4
    //arreglo
    const products = [
        { nombre: "Laptop", precio: 2500 },
        { nombre: "Mouse", precio: 50 },
        { nombre: "Monitor", precio: 300 },
    ];
    //calculo precio
    const totalSinIva = products.reduce(
        (acc, producto) => acc + producto.precio,
        0,
    );

    const totalConIva = totalSinIva * 1.19;
    //1.5 y 1.6
    const [nota, setNota] = useState(85);

    //logica de 1.7 y 1.8
    const firstName = "samuel";
    const lastName = "esteban";
    const age = 20;

    //usamos template
    const fullName = `${firstName} ${lastName}`;

    return (
        <div className="flex flex-col gap-4">
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                <h3 className="font-bold text-gray-700 border-b pb-2 mb-2">
                    1.1 & 1.2: Operaciones Básicas
                </h3>
                <p>
                    La suma de {a}+{b} es : <strong>{a + b}</strong>
                </p>
                <p>
                    La resta de {a} - {b} es: <strong>{a - b}</strong>
                </p>
                <p>
                    La multiplicación de {a} * {b} es: <strong>{a * b}</strong>
                </p>
                <p>
                    La división de {a} / {b} es: <strong>{a / b}</strong>
                </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                <h3 className="font-bold text-gray-700 border-b pb-2 mb-2">
                    1.3 & 1.4: Factura Multilínea y Total
                </h3>
                <ul className="mb-2">
                    {products.map((prod, index) => (
                        <li key={index}>
                            Producto:{prod.nombre}-Precio:${prod.precio}
                        </li>
                    ))}
                </ul>
                <div className="bg-white p-2 border rounded border-dashed border-gray-300">
                    <p>Subtotal: ${totalSinIva}</p>
                    <p className="font-bold text-blue-600">
                        Total con iva:${totalConIva}
                    </p>
                </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                <h3 className="font-bold text-gray-700 border-b pb-2 mb-2">
                    1.5 y 1.6 Condicionales
                </h3>
                <p className="mb-2">
                    Tu Nota es {nota},por lo tanto estas{" "}
                    <span
                        className={`font-bold ${nota >= 60 ? "text-green-600" : "text-red-600"}`}
                    >
                        {nota >= 60 ? "aprobado" : "reprobado"}
                    </span>
                </p>
                <div className="flex gap-2">
                    <button
                        onClick={() => setNota(85)}
                        className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600"
                    >
                        Aprobar
                    </button>
                    <button
                        onClick={() => setNota(40)}
                        className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                    >
                        Reprobar (40)
                    </button>
                </div>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                    <h3 className="font-bold text-gray-700 border-b pb-2 mb-2">
                        1.7 & 1.8: Concatenar Variables
                    </h3>
                    <p>
                        Bienvenido <strong>{fullName}</strong>!
                    </p>
                    <p>
                        El jugador {fullName} tiene {age} años.{" "}
                    </p>
                </div>
            </div>
        </div>
    );
}
