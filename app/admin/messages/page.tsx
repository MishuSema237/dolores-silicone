"use client";

import { useEffect, useState } from "react";
import { DataTable } from "@/components/admin/data-table";
import { Button } from "@/components/ui/button";

interface Message {
  _id: string;
  name: string;
  email: string;
  subject?: string;
  content: string;
  status: "New" | "Read" | "Replied" | "Archived";
  createdAt: string;
}

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  const fetchMessages = async () => {
    try {
      const res = await fetch("/api/admin/messages");
      if (res.ok) {
        const data = await res.json();
        setMessages(data);
      }
    } catch (error) {
      console.error("Failed to fetch messages:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleDelete = async (message: Message) => {
    if (!confirm(`Delete message from "${message.name}"?`)) return;

    try {
      const res = await fetch(`/api/admin/messages/${message._id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setMessages((prev) => prev.filter((m) => m._id !== message._id));
        if (selectedMessage?._id === message._id) {
          setSelectedMessage(null);
        }
      }
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  const handleMarkRead = async (message: Message) => {
    if (message.status === "Read") return;
    try {
      const res = await fetch(`/api/admin/messages/${message._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "Read" }),
      });
      if (res.ok) {
        setMessages((prev) =>
          prev.map((m) =>
            m._id === message._id ? { ...m, status: "Read" } : m
          )
        );
        if (selectedMessage?._id === message._id) {
          setSelectedMessage({ ...message, status: "Read" });
        }
      }
    } catch (error) {
      console.error("Error updating message:", error);
    }
  };

  const openMessage = (message: Message) => {
    setSelectedMessage(message);
    handleMarkRead(message);
  };

  const newCount = messages.filter((m) => m.status === "New").length;

  const columns = [
    {
      header: "From",
      accessor: (message: Message) => (
        <div>
          <div className={`font-medium ${message.status === "New" ? "text-gray-900" : "text-gray-600"}`}>
            {message.name}
          </div>
          <div className="text-xs text-gray-500">{message.email}</div>
        </div>
      ),
    },
    {
      header: "Subject",
      accessor: (message: Message) => (
        <span className={`text-sm ${message.status === "New" ? "font-semibold text-gray-900" : "text-gray-600"}`}>
          {message.subject || "No subject"}
        </span>
      ),
    },
    {
      header: "Status",
      accessor: (message: Message) => (
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
            message.status === "New"
              ? "bg-blue-100 text-blue-800"
              : message.status === "Read"
              ? "bg-gray-100 text-gray-800"
              : message.status === "Replied"
              ? "bg-green-100 text-green-800"
              : "bg-purple-100 text-purple-800"
          }`}
        >
          {message.status}
        </span>
      ),
    },
    {
      header: "Date",
      accessor: (message: Message) => (
        <span className="text-sm text-gray-500">
          {new Date(message.createdAt).toLocaleDateString("en-GB")}
        </span>
      ),
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-2">
          Messages
        </h1>
        <p className="text-gray-500">
          Customer inquiries and contact form submissions.
          {newCount > 0 && (
            <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {newCount} new
            </span>
          )}
        </p>
      </div>

      {selectedMessage ? (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <Button
              variant="ghost"
              onClick={() => setSelectedMessage(null)}
              className="text-gray-600"
            >
              ← Back to messages
            </Button>
            <Button
              variant="outline"
              className="text-red-500 hover:text-red-600 hover:bg-red-50 border-red-200"
              onClick={() => handleDelete(selectedMessage)}
            >
              Delete
            </Button>
          </div>

          <div className="border-b border-gray-100 pb-4 mb-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-bold text-gray-900">
                {selectedMessage.subject || "No subject"}
              </h2>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  selectedMessage.status === "New"
                    ? "bg-blue-100 text-blue-800"
                    : selectedMessage.status === "Read"
                    ? "bg-gray-100 text-gray-800"
                    : "bg-green-100 text-green-800"
                }`}
              >
                {selectedMessage.status}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-gray-500">
              <span>
                From: <strong className="text-gray-700">{selectedMessage.name}</strong>
              </span>
              <span>
                Email:{" "}
                <a
                  href={`mailto:${selectedMessage.email}`}
                  className="text-purple-600 hover:underline"
                >
                  {selectedMessage.email}
                </a>
              </span>
              <span>
                {new Date(selectedMessage.createdAt).toLocaleString("en-GB")}
              </span>
            </div>
          </div>

          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
              {selectedMessage.content}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100">
            <a
              href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject || "Your message to Dolores Silicone"}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Reply via Email</Button>
            </a>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {isLoading ? (
            <div className="p-8 text-center text-gray-500">Loading messages...</div>
          ) : messages.length > 0 ? (
            <DataTable
              data={messages}
              columns={columns}
              keyField="_id"
              onDelete={handleDelete}
              onEdit={(message) => openMessage(message)}
              isLoading={isLoading}
            />
          ) : (
            <div className="p-12 text-center">
              <p className="text-gray-500">No messages yet.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
