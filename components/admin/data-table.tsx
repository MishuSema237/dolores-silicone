"use client";

import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { FaEdit, FaTrash } from "react-icons/fa";

interface Column<T> {
    header: string;
    accessor: (item: T) => ReactNode;
    className?: string;
}

interface DataTableProps<T> {
    data: T[];
    columns: Column<T>[];
    onEdit?: (item: T) => void;
    onDelete?: (item: T) => void;
    keyField: keyof T;
    isLoading?: boolean;
}

export function DataTable<T>({
    data,
    columns,
    onEdit,
    onDelete,
    keyField,
    isLoading,
}: DataTableProps<T>) {
    if (isLoading) {
        return <div className="p-8 text-center text-gray-500">Loading...</div>;
    }

    return (
        <div className="overflow-x-auto">
            <table className="w-full">
                <thead>
                    <tr className="border-b border-gray-100">
                        {columns.map((col, i) => (
                            <th
                                key={i}
                                className={`text-left py-4 px-4 text-sm font-medium text-gray-500 ${col.className || ""}`}
                            >
                                {col.header}
                            </th>
                        ))}
                        {(onEdit || onDelete) && (
                            <th className="text-right py-4 px-4 text-sm font-medium text-gray-500">
                                Actions
                            </th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr
                            key={String(item[keyField])}
                            className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors"
                        >
                            {columns.map((col, i) => (
                                <td key={i} className={`py-4 px-4 ${col.className || ""}`}>
                                    {typeof col.accessor === "function"
                                        ? col.accessor(item)
                                        : (item as any)[col.accessor as any]}
                                </td>
                            ))}
                            {(onEdit || onDelete) && (
                                <td className="py-4 px-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        {onEdit && (
                                            <button
                                                onClick={() => onEdit(item)}
                                                className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                            >
                                                <FaEdit />
                                            </button>
                                        )}
                                        {onDelete && (
                                            <button
                                                onClick={() => onDelete(item)}
                                                className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                            >
                                                <FaTrash />
                                            </button>
                                        )}
                                    </div>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
