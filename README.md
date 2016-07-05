# Slot Me In

## Project Description

CLIENTS want to organize an available time with their PROVIDER.

The PROVIDER will need to check for available RESOURCES and make a BOOKING for that CLIENT.

Some PROVIDERS own RESOURCES.

Multiple PROVIDERS may share RESOURCES and manage those RESORUCES.

Some PROVIDERS don't own any RESOURCES.

RESOURCES might have limited availability.

## Example

BOB (client) wants to book a time with his PHYSIO (category) GREG (provider) at Body Works (company).

GREG will check his ROOMS (resources) for available times.

GREG works with MARY (provider) at his home.  His home only has one ROOM.

MARY has already booked from 8:00 till 12:00.

The ROOM isn't available from 2:00 to 4:00 due to restricted parking

GREG informs BOB that the room is available from 12:00 till 2:00 or after 4:00

BOB chooses 1:00 and GREG makes a booking for 45 minutes.

## UX Objects
CLIENT

PROVIDER

RESOURCE

BOOKING

CATEGORY

COMPANY

### Client
id, name, email, sms, phone, notes, emergency contact

provider by category

Current bookings

Booking history

### Provider
id, name, email, sms, phone, notes, emergency contact, resource list (resource id), category list, company list

Available resources

Booking history

Current bookings

Client history

Resource history

### Resource
id, name, description, admin list (providerid), availability, between booking buffer

Provider admin list

Booking history

Current bookings

Future bookings

### Booking
id, date, time, duration, clientid, providerid, resourceid, categoryid, notes

Provider creates for a client on a resource at a time

### Category
id, name, keywords

### Company
id, name, contact

Provider admin list

Provider contact list

Category list

# Data design

client

provider

category

resource

booking

client_bookings

provider_bookings

resource_bookings

resource_admins

provider_resources

resource_providers

category_providers

company_providers

provider_companies

