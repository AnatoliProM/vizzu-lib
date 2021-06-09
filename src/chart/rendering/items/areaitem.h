#ifndef AREAITEM_H
#define AREAITEM_H

#include "connectingitem.h"

namespace Vizzu
{
namespace Draw
{

class AreaItem : public ConnectingDrawItem
{
public:
	AreaItem(const Diag::Marker &item,
	    const Diag::DiagramOptions &options,
	    const Diag::Diagram::Markers &items,
	    size_t lineIndex);
	bool bounds(const Geom::Point &p) override;
};

}
}

#endif
