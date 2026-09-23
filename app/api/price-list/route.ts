import { readFile } from 'fs/promises';
import { join } from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const filePath = join(process.cwd(), 'private-files', 'Electrolux-Professional-Laundry-Price-list.xlsx');
    const fileBuffer = await readFile(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'Content-Disposition': 'inline; filename="Electrolux-Professional-Laundry-Price-list.xlsx"',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    console.error('Error serving price list:', error);
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }
}
