'use client';

import { EventItem } from '@/lib/content';
import ReactMarkdown from 'react-markdown';

interface EventCardProps {
  event: EventItem;
}

// Map event types to their corresponding colors
const eventColorMap: Record<string, { bg: string; border: string; icon: string }> = {
  'event': {
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    border: 'border-blue-200 dark:border-blue-800', 
    icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
  },
  'deadline': {
    bg: 'bg-amber-50 dark:bg-amber-900/20', 
    border: 'border-amber-200 dark:border-amber-800',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  'field-trip': {
    bg: 'bg-green-50 dark:bg-green-900/20', 
    border: 'border-green-200 dark:border-green-800',
    icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7'
  },
  'announcement': {
    bg: 'bg-purple-50 dark:bg-purple-900/20', 
    border: 'border-purple-200 dark:border-purple-800',
    icon: 'M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z'
  }
};

// Function to get appropriate styling based on event type
function getEventStyling(type: string) {
  return eventColorMap[type] || eventColorMap.event; // Default to event styling
}

function formatEventDate(dateStr: string) {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }).format(date);
}

function EventCard({ event }: EventCardProps) {
  const styling = getEventStyling(event.type);
  const iconClass = `text-${event.type === 'event' ? 'blue' : 
                      event.type === 'deadline' ? 'amber' : 
                      event.type === 'field-trip' ? 'green' : 'purple'}-600 dark:text-${
                      event.type === 'event' ? 'blue' : 
                      event.type === 'deadline' ? 'amber' : 
                      event.type === 'field-trip' ? 'green' : 'purple'}-400`;

  const bgClass = `${styling.bg} ${styling.border}`;
  
  return (
    <div className={`border rounded-xl p-6 mb-8 ${bgClass}`}>
      <div className="flex items-start">
        <div className={`w-10 h-10 rounded-full bg-${event.type === 'event' ? 'blue' : 
                        event.type === 'deadline' ? 'amber' : 
                        event.type === 'field-trip' ? 'green' : 'purple'}-100 dark:bg-${
                        event.type === 'event' ? 'blue' : 
                        event.type === 'deadline' ? 'amber' : 
                        event.type === 'field-trip' ? 'green' : 'purple'}-900/40 flex items-center justify-center mr-4 shrink-0`}>
          <svg className={`w-5 h-5 ${iconClass}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={styling.icon} />
          </svg>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white text-lg mb-1">
            {event.title}
          </h3>
          <div className="text-gray-600 dark:text-gray-300 mb-3 prose prose-sm dark:prose-invert max-w-none">
            <ReactMarkdown>{event.content}</ReactMarkdown>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className={`font-medium text-${event.type === 'event' ? 'blue' : 
                              event.type === 'deadline' ? 'amber' : 
                              event.type === 'field-trip' ? 'green' : 'purple'}-600 dark:text-${
                              event.type === 'event' ? 'blue' : 
                              event.type === 'deadline' ? 'amber' : 
                              event.type === 'field-trip' ? 'green' : 'purple'}-400`}>
              {event.type === 'deadline' ? 'Due: ' : 'Date: '}{formatEventDate(event.eventDate)}
            </span>
            <span className="text-gray-500 dark:text-gray-400">
              Posted: {formatEventDate(event.date)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function UpcomingEvents({ events }: { events: EventItem[] }) {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Upcoming Events
      </h2>
      
      {events.map((event) => (
        <EventCard key={event.slug} event={event} />
      ))}
    </div>
  );
}